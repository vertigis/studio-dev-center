import BrowserOnly from "@docusaurus/BrowserOnly";
import React, { useEffect, useState } from "react";
import MessagingContent from "./MessagingContent";
import { MessageSchema, Definition } from "./schema";
import { isFeaturesLike, replaceFeaturesLike } from "./utils";

interface ViewerMessagingProps {
    product: "mobile" | "web";
    type: "argument" | "command" | "event" | "operation" | "config";
}

export default function ViewerMessagingWrapper(props: ViewerMessagingProps) {
    return <BrowserOnly>{() => <ViewerMessaging {...props} />}</BrowserOnly>;
}

// Cache the requests to allow this component to be rendered
// multiple times for the different types: "command", "event", etc.
// We need to be able to render the headers within markdown so it
// plays nicely with the docusaurus right TOC component.
const cachedRequests: Record<
    "web" | "mobile" | "common",
    Record<"action" | "event" | "config", Promise<Response> | undefined>
> = {
    web: { action: undefined, event: undefined, config: undefined },
    mobile: { action: undefined, event: undefined, config: undefined },
    common: { action: undefined, event: undefined, config: undefined },
};

function ViewerMessaging(props: ViewerMessagingProps) {
    const { product, type } = props;
    const [messagingJson, setMessagingJson] = useState<any>();

    // Fetch schema
    useEffect(() => {
        let didCancel = false;
        let schemaType: "action" | "event" | "config";
        switch (type) {
            case "command":
            case "operation":
                schemaType = "action";
                break;
            case "event":
                schemaType = "event";
                break;
            case "argument":
            case "config":
                schemaType = "config";
                break;
            default:
                break;
        }

        (async () => {
            if (schemaType! && !cachedRequests[product][schemaType]) {
                cachedRequests["common"].config = fetch(
                    `https://apps.vertigisstudio.com/web/common-app-config.schema.json`
                );
                cachedRequests[product].config = fetch(
                    `https://apps.vertigisstudio.com/web/${product}-app-config.schema.json`
                );
                if (schemaType === "config") {
                    // We need to fetch these for some of the definitions they include.
                    cachedRequests[product].action = fetch(
                        `https://apps.vertigisstudio.com/web/${product}-action.schema.json`
                    );
                    cachedRequests[product].event = fetch(
                        `https://apps.vertigisstudio.com/web/${product}-event.schema.json`
                    );
                } else {
                    cachedRequests[product][schemaType] = fetch(
                        `https://apps.vertigisstudio.com/web/${product}-${schemaType}.schema.json`
                    );
                }
            }

            const messageSchemas: MessageSchema[] = [];
            const commonConfigResponse = await cachedRequests["common"].config!;
            const productConfigResponse = await cachedRequests[product].config!;
            const actionResponse = await cachedRequests[product].action!;
            const eventResponse = await cachedRequests[product].event!;

            // Clone to avoid error when reading json multiple times
            const commonConfigResponseJson: MessageSchema =
                await commonConfigResponse.clone().json();
            const productConfigResponseJson: MessageSchema =
                await productConfigResponse.clone().json();
            const actionResponseJson: MessageSchema = await actionResponse
                ?.clone()
                .json();
            const eventResponseJson: MessageSchema = await eventResponse
                ?.clone()
                .json();

            if (commonConfigResponseJson) {
                messageSchemas.push(commonConfigResponseJson);
            }
            if (productConfigResponseJson) {
                messageSchemas.push(productConfigResponseJson);
            }
            if (actionResponseJson) {
                messageSchemas.push(actionResponseJson);
            }
            if (eventResponseJson) {
                messageSchemas.push(eventResponseJson);
            }

            if (didCancel) {
                return;
            }

            const actionObject: Definition = {
                properties: {
                    name: {
                        description: "The name of a command or operation.",
                        type: "string",
                    },
                    arguments: {
                        description:
                            "The arguments for the command or operation.",
                        type: "object",
                    },
                },
                required: ["name", "arguments"],
                type: "object",
            };
            const actionObjectRef: Definition = {
                $ref: "#/definitions/viewer-spec.ActionObject",
            };
            const actionString: Definition = {
                type: "string",
            };

            const actionOverrideDef: Definition = {
                description: `An action to execute in the viewer; can be an action name, an action object, or a command chain (https://developers.vertigisstudio.com/docs/${product}/configuration-commands-operations/#command-chains). The list of valid action names are the names of the commands and operations listed in this document`,
                // Basic definition of a command chain
                anyOf: [
                    actionString,
                    actionObjectRef,
                    {
                        items: {
                            anyOf: [actionString, actionObjectRef],
                        },
                        type: "array",
                    },
                ],
            };

            const definitions =
                type !== "config"
                    ? ({
                          "viewer-spec.ActionObject": actionObject,
                          "viewer-spec.Action": actionOverrideDef,
                      } as any)
                    : {};

            const schema = { definitions };

            messageSchemas.forEach((messageSchema) => {
                Object.keys(messageSchema.definitions).forEach((key) => {
                    schema.definitions[key] = isFeaturesLike(
                        messageSchema.definitions[key].anyOf
                    )
                        ? {
                              ...messageSchema.definitions[key],
                              anyOf: replaceFeaturesLike(
                                  messageSchema.definitions[key]
                                      .anyOf as Definition[]
                              ),
                          }
                        : messageSchema.definitions[key];
                });
            });

            setMessagingJson(schema);
        })();

        return () => {
            didCancel = true;
        };
    }, [product]);

    // Scroll to element if id present in URL hash
    useEffect(() => {
        if (!messagingJson) {
            return;
        }

        // Decode entities in the URL
        // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
        const hash = window.decodeURIComponent(window.location.hash);
        if (hash) {
            document.getElementById(hash.substring(1))?.scrollIntoView();
        }
    }, [messagingJson]);

    return messagingJson ? (
        <MessagingContent
            schema={messagingJson}
            type={type}
            product={product}
        />
    ) : (
        <div>Loading...</div>
    );
}
