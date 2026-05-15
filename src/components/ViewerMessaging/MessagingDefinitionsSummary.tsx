import React, { useContext, useMemo } from "react";
import { MessageSchema } from "./schema";
import MessagingDefinition from "./MessagingDefinition";
import { FilterStateContext } from "./FilterStateProvider";

interface MessagingDefinitionsSummaryProps {
    schema: MessageSchema;
    product: "web" | "mobile";
    type: "argument" | "config";
}

export default function MessagingDefinitionsSummary(
    props: MessagingDefinitionsSummaryProps
) {
    const { schema, product, type } = props;
    const { filterText } = useContext(FilterStateContext);

    const names = useMemo(() => {
        // Grab only the `object` or `enum` type definitions.
        const filteredDefinitions: typeof schema.definitions = Object.entries(
            schema.definitions
        ).reduce((acc, [name, definition]) => {
            if (
                definition.type === "object" ||
                (definition.type === "string" && definition.enum)
            ) {
                return { ...acc, [name]: definition };
            }
            return acc;
        }, {});

        return filterText && filterText !== ""
            ? Object.keys(filteredDefinitions).filter((name) =>
                  name.toLowerCase().includes(filterText.toLowerCase())
              )
            : Object.keys(filteredDefinitions);
    }, [filterText, schema]);

    const messagingDefinitionsSummary = useMemo(() => {
        return (
            <div>
                {names
                    // Now filtering out everything but model properties on the "config"
                    // page, the remainder will be added to the "arguments" page
                    // instead.
                    .filter((key) =>
                        type === "argument"
                            ? !key
                                  .toLocaleLowerCase()
                                  .includes("modelproperties") &&
                              !key.toLocaleLowerCase().endsWith(":input") &&
                              !key.toLocaleLowerCase().endsWith(":output")
                            : key
                                  .toLocaleLowerCase()
                                  .includes("modelproperties")
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
    }, [schema, product, type, names]);

    return messagingDefinitionsSummary;
}
