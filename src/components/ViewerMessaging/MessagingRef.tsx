import React from "react";
import { MessageSchema } from "./schema";
import {
    trimDefinitionsName,
    getReferencedDefinition,
    getArgumentDefinitionLink,
} from "./utils";
import useBaseUrl from "@docusaurus/useBaseUrl";

interface MessagingRefProps {
    isArray?: boolean;
    name: string;
    schema: MessageSchema;
    product: "web" | "mobile" | "common";
}

export default function MessagingRef(props: MessagingRefProps) {
    const { isArray, name, schema, product } = props;
    const fullName = trimDefinitionsName(name);
    const trimmedName = fullName.includes(" ")
        ? fullName.split(/\s(.*)/)[1]
        : fullName;
    const parts = fullName.split(" ")[0].replace("/", ".").split(".");
    const shortName = parts[parts.length - 1];
    const referencedDefinition = getReferencedDefinition(name, schema);

    // We'll only render definition tables for object types, everything else can be inlined.
    if (referencedDefinition && referencedDefinition.type === "object") {
        return (
            <span>
                <code>
                    <a
                        href={useBaseUrl(
                            getArgumentDefinitionLink(name, product)
                        )}
                    >
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
