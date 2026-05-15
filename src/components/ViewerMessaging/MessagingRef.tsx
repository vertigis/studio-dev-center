import React, { ReactElement, useMemo } from "react";
import { MessageSchema } from "./schema";
import {
    trimDefinitionsName,
    getReferencedDefinition,
    getArgumentDefinitionLink,
} from "./utils";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";

interface MessagingRefProps {
    isArray?: boolean;
    name: string;
    schema: MessageSchema;
    linkId: string;
    product: "web" | "mobile";
}

const getRefLinkElement = (
    shortName: string,
    refUrl?: string,
    typeName?: string,
    linkId?: string
): JSX.IntrinsicElements["span"] => (
    <span>
        <code>
            {refUrl ? (
                <Link
                    href={refUrl}
                    target={refUrl.startsWith("http") ? "_blank" : "_self"}
                    onClick={() => (window.location.hash = linkId!)}
                >
                    {shortName}
                </Link>
            ) : (
                shortName
            )}
        </code>
        {typeName && (
            <span className="messaging-ref-type-name">{typeName}</span>
        )}
    </span>
);

export default function MessagingRef(props: MessagingRefProps): ReactElement {
    const { isArray, name, schema, linkId, product } = props;

    const { withBaseUrl } = useBaseUrlUtils();

    const messagingRef = useMemo(() => {
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
                withBaseUrl(getArgumentDefinitionLink(name, product)!),
                shortName !== typeName ? typeName : undefined,
                linkId
            ) as ReactElement;
        }

        if (
            shortName === "Features" ||
            shortName === "Feature" ||
            shortName === "FeatureSource" ||
            shortName.endsWith("Extension")
        ) {
            return getRefLinkElement(
                isArray ? `${shortName}[]` : shortName,
                withBaseUrl(getArgumentDefinitionLink(shortName, product)!),
                shortName !== typeName ? typeName : undefined,
                linkId
            ) as ReactElement;
        }

        if (typeName.startsWith("esri") && !typeName.includes("rest-api")) {
            const parts = typeName.replace(".", "/").split("/");
            return getRefLinkElement(
                isArray
                    ? `${parts[parts.length - 1]}[]`
                    : parts[parts.length - 1],
                `https://developers.arcgis.com/javascript/latest/api-reference/${parts.join(
                    "-"
                )}.html`,
                `@arcgis.core.${parts.splice(1).join(".")}`,
                linkId
            ) as ReactElement;
        }

        return getRefLinkElement(
            isArray ? `${shortName}[]` : shortName,
            undefined,
            shortName !== typeName ? typeName : undefined,
            linkId
        ) as ReactElement;
    }, [isArray, name, schema, linkId, product]);

    return messagingRef;
}
