import Heading from "@theme/Heading";
import React from "react";
import { getDescription, listProperties } from "./MessagingArgument";
import { MessageSchema } from "./schema";
import {
    trimDefinitionsName,
    getReferencedDefinition,
    getArgumentDefinitionLinkId,
} from "./utils";

interface MessagingDefinitionProps {
    definitionName: string;
    schema: MessageSchema;
    product: "web" | "mobile";
}

export default function MessagingDefinition(props: MessagingDefinitionProps) {
    const { definitionName, schema, product } = props;

    const typeName = trimDefinitionsName(definitionName);
    const parts = typeName.replace("/", ".").split(".");
    const shortName = parts[parts.length - 1];
    const definition = getReferencedDefinition(definitionName, schema);
    if (!definition) {
        return null;
    }

    if (definition.type !== "object") {
        console.warn(
            "Tried to render definition for non-object type",
            typeName
        );
        return null;
    }

    const id = getArgumentDefinitionLinkId(typeName);

    return (
        <div className="margin-bottom--lg">
            <span>
                <Heading as="h2" id={id}>
                    {shortName}
                </Heading>
                {shortName !== typeName && (
                    <h5 className="messaging-definition-subheader">
                        {typeName}
                    </h5>
                )}
            </span>
            {getDescription(definition, schema, "margin-bottom--md", product)}
            <h3>Properties</h3>
            {(!definition.properties ||
                Object.keys(definition.properties).length === 0) && (
                <em>This object doesn't currently contain any properties.</em>
            )}
            {definition.properties &&
                listProperties(definition, schema, typeName, product)}
        </div>
    );
}
