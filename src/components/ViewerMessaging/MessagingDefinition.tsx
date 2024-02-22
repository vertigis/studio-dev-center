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
    const parts = trimmedName.replace("/", ".").split(".");
    const shortName = parts[parts.length - 1];
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
            <span>
                <h2 id={id}>{shortName}</h2>
                {shortName !== trimmedName && <h5>{`${trimmedName}`}</h5>}
            </span>
            {getDescription(definition, schema, "margin-bottom--md")}
            <h3>Properties</h3>
            {(!definition.properties ||
                Object.keys(definition.properties).length === 0) && (
                <em>This object doesn't currently contain any properties.</em>
            )}
            {definition.properties && listProperties(definition, schema)}
        </div>
    );
}
