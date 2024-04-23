import Heading from "@theme/Heading";
import React from "react";
import MessagingArgument, { getDescription } from "./MessagingArgument";
import { MessageSchema, Definition } from "./schema";
import { getActionOrEventDefinitionLinkId, trimDefinitionsName } from "./utils";

type RefDefinition = Required<Pick<Definition, "$ref">>;

interface MessagingTypeSummaryProps {
    schema: MessageSchema;
    type: "command" | "event" | "operation";
    product: "web" | "mobile";
}

function definitionIsRef(def: Definition): def is RefDefinition {
    return !!def.$ref;
}

function typeIsOptional(def: Definition | undefined): boolean | undefined {
    return def?.type?.includes("null") || def?.anyOf?.some(typeIsOptional);
}

export default function MessagingTypeSummary(props: MessagingTypeSummaryProps) {
    const { schema, type, product } = props;
    const definitions = schema.definitions as Record<
        string,
        Definition | undefined
    >;
    let definitionName: string;

    if (type === "command") {
        definitionName = "viewer-spec.SingleCommand";
    } else if (type === "operation") {
        definitionName = "viewer-spec.SingleOperation";
    } else {
        definitionName = "viewer-spec.Event";
    }
    const names = definitions[definitionName]?.anyOf
        ?.filter(definitionIsRef)
        .map((def) => trimDefinitionsName(def.$ref));

    if (!names) {
        return null;
    }

    return (
        <>
            {names.map((key) => {
                const item = definitions[key];
                const linkId = getActionOrEventDefinitionLinkId(key, type);
                const inputItem = definitions[`${key}:input`];
                const outputItem = definitions[`${key}:output`];

                if (!item) {
                    return null;
                }

                return (
                    <div key={key} className="margin-bottom--lg">
                        <Heading as="h2" id={linkId}>
                            {key}
                        </Heading>
                        {getDescription(
                            item,
                            schema,
                            "margin-bottom--md",
                            product
                        )}
                        <div className="margin-bottom--md">
                            <h3>{`Argument ${
                                typeIsOptional(inputItem) === true
                                    ? "(optional)"
                                    : ""
                            }`}</h3>
                            <div className="margin-left--sm">
                                <MessagingArgument
                                    definition={inputItem}
                                    schema={schema}
                                    linkId={linkId}
                                    product={product}
                                />
                            </div>
                        </div>
                        {type === "operation" && outputItem && (
                            <>
                                <div>Result</div>
                                <div className="margin-left--sm">
                                    <MessagingArgument
                                        definition={outputItem}
                                        schema={schema}
                                        linkId={linkId}
                                        product={product}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                );
            })}
        </>
    );
}
