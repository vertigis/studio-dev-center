import React from "react";
import MessagingArgument, { getDescription } from "./MessagingArgument";
import { MessageSchema, Definition } from "./schema";
import { getActionOrEventDefinitionLinkId, trimDefinitionsName } from "./utils";

type RefDefinition = Required<Pick<Definition, "$ref">>;

interface MessagingTypeSummaryProps {
    schema: MessageSchema;
    type: "command" | "event" | "operation";
}

function definitionIsRef(def: Definition): def is RefDefinition {
    return !!def.$ref;
}

function typeIsOptional(def: Definition | undefined): boolean | undefined {
    return def?.type?.includes("null") || def?.anyOf?.some(typeIsOptional);
}

export default function MessagingTypeSummary(props: MessagingTypeSummaryProps) {
    const { schema, type } = props;
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
                        <h2 id={linkId}>{key}</h2>
                        {getDescription(item, schema, "margin-bottom--md")}
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
