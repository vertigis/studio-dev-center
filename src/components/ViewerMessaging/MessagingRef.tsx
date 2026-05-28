import React, { ReactElement, useCallback, useContext, useMemo } from "react";
import { MessageSchema } from "./schema";
import {
    trimDefinitionsName,
    getReferencedDefinition,
    getArgumentDefinitionLink,
} from "./utils";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import { FilterStateContext } from "./FilterStateProvider";

interface MessagingRefProps {
    isArray?: boolean;
    name: string;
    schema: MessageSchema;
    linkId: string;
    product: "web" | "mobile";
}

export default function MessagingRef(props: MessagingRefProps): ReactElement {
    const { isArray, name, schema, linkId, product } = props;

    const { withBaseUrl } = useBaseUrlUtils();
    const { setFilterText, setArgumentFilter } = useContext(FilterStateContext);

    const onRefLinkClicked = useCallback(
        (name: string, url: string) => {
            // Populate the filter when linking to the definitions page. This
            // speeds things up quite a bit.
            const typeName = name.endsWith("[]")
                ? name.slice(0, name.length - 2)
                : name;
            if (url.includes("api-argument-definitions")) {
                setArgumentFilter?.(typeName);
            } else if (url.startsWith("#definition-")) {
                setFilterText?.(typeName);
            }
            window.location.hash = linkId ?? "";
        },
        [linkId, setArgumentFilter]
    );

    const getRefLinkElement = useCallback(
        ({
            shortName,
            refUrl,
            typeName,
        }: {
            shortName: string;
            refUrl?: string;
            typeName?: string;
        }) => (
            <span>
                <code>
                    {refUrl ? (
                        <Link
                            href={refUrl}
                            target={
                                refUrl.startsWith("http") ? "_blank" : "_self"
                            }
                            onClick={() => onRefLinkClicked(shortName, refUrl)}
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
        ),
        []
    );

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
            return getRefLinkElement({
                shortName: isArray ? `${shortName}[]` : shortName,
                refUrl: withBaseUrl(getArgumentDefinitionLink(name, product)!),
                typeName: shortName !== typeName ? typeName : undefined,
            }) as ReactElement;
        }

        if (
            shortName === "Features" ||
            shortName === "Feature" ||
            shortName === "FeatureSource" ||
            shortName.endsWith("Extension")
        ) {
            return getRefLinkElement({
                shortName: isArray ? `${shortName}[]` : shortName,
                refUrl: withBaseUrl(
                    getArgumentDefinitionLink(shortName, product)!
                ),
                typeName: shortName !== typeName ? typeName : undefined,
            }) as ReactElement;
        }

        if (typeName.startsWith("esri") && !typeName.includes("rest-api")) {
            // esri.geometry.SpatialReference => ["geometry", "SpatialReference"];
            const parts = typeName.split(".").slice(1);
            return getRefLinkElement({
                shortName: isArray
                    ? `${parts[parts.length - 1]}[]`
                    : parts[parts.length - 1],
                refUrl: `https://developers.arcgis.com/javascript/latest/references/core/${parts.join(
                    "/"
                )}`,
                typeName: `@arcgis.core.${parts.join(".")}`,
            }) as ReactElement;
        }

        return getRefLinkElement({
            shortName: isArray ? `${shortName}[]` : shortName,
            refUrl: undefined,
            typeName: shortName !== typeName ? typeName : undefined,
        }) as ReactElement;
    }, [isArray, name, schema, linkId, product]);

    return messagingRef;
}
