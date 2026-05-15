import Heading from "@theme/Heading";
import React, { ReactElement, useEffect, useMemo } from "react";
import { getDescription, listProperties } from "./MessagingArgument";
import { MessageSchema } from "./schema";
import {
    trimDefinitionsName,
    getReferencedDefinition,
    getArgumentDefinitionLinkId,
} from "./utils";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";

interface MessagingDefinitionProps {
    definitionName: string;
    schema: MessageSchema;
    product: "web" | "mobile";
}

export default function MessagingDefinition(
    props: MessagingDefinitionProps
): ReactElement {
    const { definitionName, schema, product } = props;

    const { withBaseUrl } = useBaseUrlUtils();

    const typeName = useMemo(
        () => trimDefinitionsName(definitionName),
        [definitionName]
    );
    const parts = useMemo(
        () => typeName.replace("/", ".").split("."),
        [typeName]
    );
    const shortName = useMemo(() => parts[parts.length - 1], [parts]);
    const definition = useMemo(
        () => getReferencedDefinition(definitionName, schema),
        [shortName]
    );
    const id = useMemo(() => getArgumentDefinitionLinkId(typeName), [typeName]);
    const description = useMemo(
        () =>
            getDescription(
                definition!,
                schema,
                "margin-bottom--md",
                product,
                withBaseUrl
            ),
        [definition, schema, product]
    );
    const properties = useMemo(() => {
        // Special handling for enums
        if (definition?.enum) {
            return (
                <code>
                    {definition.enum.map((val) => `"${val}"`).join(" | ")}
                </code>
            );
        }

        if (
            !definition?.properties ||
            Object.keys(definition.properties).length === 0
        ) {
            return (
                <em>This object doesn't currently contain any properties.</em>
            );
        }

        return listProperties(
            definition,
            schema,
            typeName,
            product,
            withBaseUrl
        );
    }, [definition]);

    useEffect(() => {
        if (definition?.type !== "object") {
            console.warn(
                "Tried to render definition for non-object type",
                typeName
            );
        }
    }, [definition]);

    return definition ? (
        <div className="margin-bottom--lg">
            <span>
                <Heading
                    as="h2"
                    id={id}
                    className="messaging-definition-header"
                >
                    {shortName}
                </Heading>
                {shortName !== typeName && (
                    <h5 className="messaging-definition-subheader">
                        {typeName}
                    </h5>
                )}
            </span>
            {description}
            <h3>{definition.enum ? "Possible Values" : "Properties"}</h3>
            {properties}
        </div>
    ) : (
        <></>
    );
}
