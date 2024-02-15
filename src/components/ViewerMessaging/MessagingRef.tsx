import React from "react";
import { MessageSchema } from "./schema";
import {
    trimDefinitionsName,
    getArgumentDefinitionLinkId,
    getReferencedDefinition,
} from "./utils";

interface MessagingRefProps {
    isArray?: boolean;
    name: string;
    schema: MessageSchema;
}

export default function MessagingRef(props: MessagingRefProps) {
    const { isArray, name, schema } = props;

    const trimmedName = trimDefinitionsName(name);
    const parts = trimmedName.replace("/", ".").split(".");
    const shortName = parts[parts.length - 1];
    const referencedDefinition = getReferencedDefinition(name, schema);

    // We'll only render definition tables for object types, everything else can be inlined.
    if (referencedDefinition && referencedDefinition.type === "object") {
        return (
            <span>
                <code>
                    <a href={`#${getArgumentDefinitionLinkId(name)}`}>
                        {shortName}
                        {isArray && "[]"}
                    </a>
                </code>
                {shortName !== trimmedName && (
                    <small>{` ${trimmedName}`}</small>
                )}
            </span>
        );
    }

    if (trimmedName.startsWith("esri") && !trimmedName.includes("rest-api")) {
        const parts = trimmedName.replace(".", "/").split("/");
        return (
            <span>
                <code>
                    <span>
                        <a
                            href={`https://developers.arcgis.com/javascript/latest/api-reference/${parts.join(
                                "-"
                            )}.html`}
                            target="_blank"
                        >
                            {parts[parts.length - 1]}
                        </a>
                        {isArray && "[]"}
                    </span>
                </code>
                <small>{` @arcgis.core.${parts.splice(1).join(".")}`}</small>
            </span>
        );
    }

    return (
        <span>
            <code>
                {shortName}
                {isArray && "[]"}
            </code>
            {shortName !== trimmedName && <small>{` ${trimmedName}`}</small>}
        </span>
    );
}
