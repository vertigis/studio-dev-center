import React from "react";
import { getDescription, listProperties } from "./MessagingArgument";
import { MessageSchema } from "./schema";
import {
    trimDefinitionsName,
    getArgumentDefinitionLinkId,
    getReferencedDefinition,
} from "./utils";

interface MessagingDefinitionProps {
    definitionName: string;
    schema: MessageSchema;
}

export default function MessagingDefinition(props: MessagingDefinitionProps) {
    const { definitionName, schema } = props;

    const trimmedName = trimDefinitionsName(definitionName);
    const definition = getReferencedDefinition(definitionName, schema);
    if (!definition) {
        return null;
    }

    if (definition.type !== "object") {
        console.warn(
            "Tried to render definition for non-object type",
            trimmedName
        );
        return null;
    }

    const id = getArgumentDefinitionLinkId(trimmedName);

    return (
        <div className="margin-bottom--lg">
            <h3 id={id}>{trimmedName}</h3>
            {getDescription(definition, schema, "margin-bottom--md")}
            <div>Properties</div>
            {(!definition.properties ||
                Object.keys(definition.properties).length === 0) && (
                <em>This object doesn't currently contain any properties.</em>
            )}
            {definition.properties && listProperties(definition, schema)}
        </div>
    );
}
