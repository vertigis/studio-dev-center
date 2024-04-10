import React from "react";
import { MessageSchema } from "./schema";
import MessagingDefinition from "./MessagingDefinition";

interface MessagingDefinitionsSummaryProps {
    schema: MessageSchema;
    product: "web" | "mobile";
    type: "argument" | "config";
}

export default function MessagingDefinitionsSummary(
    props: MessagingDefinitionsSummaryProps
) {
    const { schema, product, type } = props;

    // Grab only the `object` type definitions, everything else can be inlined.
    const filteredDefinitions: typeof schema.definitions = Object.entries(
        schema.definitions
    ).reduce((acc, [name, definition]) => {
        if (definition.type === "object") {
            return { ...acc, [name]: definition };
        }
        return acc;
    }, {});

    return (
        <div>
            {Object.keys(filteredDefinitions)
                // Now filtering out everything but model properties on the "config"
                // page, the remainder will be added to the "arguments" page
                // instead.
                .filter((key) =>
                    type === "argument"
                        ? !key.toLocaleLowerCase().includes("modelproperties")
                        : key.toLocaleLowerCase().includes("modelproperties")
                )
                // TODO: Better sort so components are in one section and
                // services are in another
                .sort((a, b) => {
                    return a.localeCompare(b);
                })
                .map((name) => (
                    <MessagingDefinition
                        key={name}
                        definitionName={name}
                        schema={schema}
                        product={product}
                    />
                ))}
        </div>
    );
}
