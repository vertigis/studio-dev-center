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
    product: "web" | "mobile";
}

const getRefLinkElement = (
    shortName: string,
    refUrl?: string,
    typeName?: string
): JSX.IntrinsicElements["span"] => (
    <span>
        <code>
            {refUrl ? (
                <a
                    href={refUrl}
                    target={refUrl.startsWith("http") ? "_blank" : "_self"}
                >
                    {shortName}
                </a>
            ) : (
                shortName
            )}
        </code>
        {typeName && (
            <span className="messaging-ref-type-name">{typeName}</span>
        )}
    </span>
);

export default function MessagingRef(props: MessagingRefProps) {
    const { isArray, name, schema, product } = props;
    const fullName = trimDefinitionsName(name);
    const typeName = fullName.includes(" ")
        ? fullName.split(/\s(.*)/)[1]
        : fullName;
    const parts = fullName.split(" ")[0].replace("/", ".").split(".");
    const shortName = parts[parts.length - 1];
    const referencedDefinition = getReferencedDefinition(name, schema);

    // We'll only render definition tables for object types, everything else can be inlined.
    if (referencedDefinition && referencedDefinition.type === "object") {
        return getRefLinkElement(
            isArray ? `${shortName}[]` : shortName,
            useBaseUrl(getArgumentDefinitionLink(name, product)),
            shortName !== typeName ? typeName : undefined
        );
    }

    if (
        shortName === "Features" ||
        shortName === "Feature" ||
        shortName === "FeatureSource" ||
        shortName.endsWith("Extension")
    ) {
        return getRefLinkElement(
            isArray ? `${shortName}[]` : shortName,
            useBaseUrl(getArgumentDefinitionLink(shortName, product)),
            shortName !== typeName ? typeName : undefined
        );
    }

    if (typeName.startsWith("esri") && !typeName.includes("rest-api")) {
        const parts = typeName.replace(".", "/").split("/");
        return getRefLinkElement(
            isArray ? `${parts[parts.length - 1]}[]` : parts[parts.length - 1],
            `https://developers.arcgis.com/javascript/latest/api-reference/${parts.join(
                "-"
            )}.html`,
            `@arcgis.core.${parts.splice(1).join(".")}`
        );
    }

    return getRefLinkElement(
        isArray ? `${shortName}[]` : shortName,
        undefined,
        shortName !== typeName ? typeName : undefined
    );
}
