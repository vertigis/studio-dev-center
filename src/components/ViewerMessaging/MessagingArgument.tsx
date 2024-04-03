import React from "react";
import { Definition, MessageSchema, PrimitiveType } from "./schema";
import MessagingRef from "./MessagingRef";
import { getReferencedDefinition } from "./utils";

interface MessagingArgumentProps {
    definition: Definition | string | undefined;
    schema: MessageSchema;
    product: "web" | "mobile";
}

export function getDescription(
    definition: Definition,
    schema: MessageSchema,
    className: string
): JSX.Element | undefined {
    let { description } = definition;
    if (!description) {
        return undefined;
    }

    const parts = description.match(/{@link ([a-zA-Z\.\s\/!:\-_]*?)}|`(.*?)`/g);
    if (!parts) {
        return <div className={className}>{description}</div>;
    }
    const getDefinition = (text: string | undefined): Definition => {
        const key = text?.split(".")[0];
        const property = text?.split(".")[1];
        return (key &&
            property &&
            schema.definitions[key]?.properties?.[property]) as Definition;
    };

    // Descriptions consisting only of a link can be replaced.
    if (
        parts.length === 1 &&
        description.toLocaleLowerCase().startsWith("see {@link")
    ) {
        const linkText = description
            .toLocaleLowerCase()
            .match(/(see {@link )([a-zA-Z\.\s\/!]*?)}/)?.[2];
        const referencedDef = definition.$ref
            ? getReferencedDefinition(definition.$ref, schema)
            : getDefinition(linkText);
        return referencedDef
            ? getDescription(referencedDef, schema, className)
            : undefined;
    }

    // Link to any references found in the description.
    const formatPart = (link: string, index: number): JSX.Element[] => {
        const linkIndex = description?.indexOf(link) ?? 0;
        const start = description?.slice(0, linkIndex);
        const remaining = description?.slice(linkIndex);
        const linkMatch = link?.match(
            /{@link ([a-zA-Z\.\s\/!:\-_]*?)}|`(.*?)`/
        );
        const linkText = (linkMatch?.[1] ?? linkMatch?.[2])?.trim();
        const refLink = getDefinition(linkText ?? "")?.$ref;
        const isExternalLink = linkText?.startsWith("http");
        const shortText = isExternalLink ? linkText : linkText?.split("!")[1];
        const href = refLink ?? (isExternalLink ? linkText : undefined);

        const linkElement = href ? (
            <a href={href} target={isExternalLink ? "_blank" : "_self"}>
                {shortText}
            </a>
        ) : (
            shortText
        );

        description = remaining?.slice(link.length);

        if (index === 0) {
            if (parts.length === 1) {
                return [
                    <span>{start}</span>,
                    <code>{linkElement}</code>,
                    <span>{remaining?.slice(link.length)}</span>,
                ];
            }
            return [
                <span>{start}</span>,
                <code>{linkElement}</code>,
                <span>
                    {description?.slice(
                        0,
                        description?.indexOf(parts[index + 1])
                    )}
                </span>,
            ];
        }
        if (description?.length ?? 0 > 0) {
            if (index < parts.length - 1) {
                return [
                    <code>{linkElement}</code>,
                    <span>
                        {description?.slice(
                            0,
                            description?.indexOf(parts[index + 1])
                        )}
                    </span>,
                ];
            }
            return [
                <code>{linkElement}</code>,
                <span>{remaining?.slice(link.length)}</span>,
            ];
        }
        return [<code>{linkElement}</code>];
    };

    return (
        <div className={className}>
            {parts.flatMap((link, i) => formatPart(link, i))}
        </div>
    );
}

export function listProperties(
    definition: Definition,
    schema: MessageSchema,
    product: "web" | "mobile"
) {
    if (!definition.properties) {
        return null;
    }

    return (
        <div className="margin-left--sm">
            {Object.entries(definition.properties).map(
                ([propName, propDef]) => {
                    return (
                        <div key={propName} className="margin-bottom--md">
                            <div className="margin-bottom--sm">
                                <div className="property-name-and-badges">
                                    <div
                                        role="heading"
                                        aria-level={4}
                                        className="monospaceHeader"
                                    >
                                        {propName}
                                    </div>
                                    {definition.required?.includes(
                                        propName
                                    ) && (
                                        <span className="badge badge--secondary">
                                            Required
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="margin-left--sm">
                                <MessagingArgument
                                    definition={propDef}
                                    schema={schema}
                                    product={product}
                                />
                                {getDescription(
                                    propDef,
                                    schema,
                                    "margin-top--sm"
                                )}
                            </div>
                        </div>
                    );
                }
            )}
        </div>
    );
}

export default function MessagingArgument(props: MessagingArgumentProps) {
    const { schema, product } = props;

    let definition = props.definition;

    // These don't provide value so ignore them
    const isCommandArgument = (definition: Definition) => {
        return (
            definition.properties &&
            Object.keys(definition.properties).length === 2 &&
            definition.required?.length === 2 &&
            definition.required[0] === "name" &&
            definition.required[1] === "arguments"
        );
    };

    if (typeof definition === "string") {
        const foundDefinition = getReferencedDefinition(definition, schema);
        console.warn("Couldn't find definition:", definition);
        definition = foundDefinition;
    }

    if (!definition) {
        return (
            <div style={{ fontStyle: "italic" }}>There are no arguments</div>
        );
    }
    // This is a single type referencing another definition
    else if (definition.$ref) {
        const referencedDef = getReferencedDefinition(definition.$ref, schema);

        // We only hyperlink to object type definitions, everything else can be inlined.
        if (referencedDef && referencedDef.type !== "object") {
            return (
                <MessagingArgument
                    definition={referencedDef}
                    schema={schema}
                    product={product}
                />
            );
        }

        return (
            <MessagingRef
                name={definition.$ref}
                schema={schema}
                product={product}
            />
        );
    }
    // This is a single type
    else if (definition.type) {
        if (definition.type === "string" && definition.enum) {
            const enumType = (definition.enum as PrimitiveType[])
                .map((val) => `"${val}"`)
                .join(" | ");
            return <code>{enumType}</code>;
        } else if (definition.type === "array" && definition.items) {
            const renderAnyOf = (items: Definition[]) => {
                return (
                    <>
                        {items.map((option, index) => (
                            // There's not a guaranteed safe identifier we can use for the key prop, fall back to index.
                            <div key={`${option.$ref}-${index}` || index}>
                                <MessagingRef
                                    isArray
                                    name={option.$ref ?? ""}
                                    schema={schema}
                                    product={product}
                                />
                            </div>
                        ))}
                    </>
                );
            };
            if (Array.isArray(definition.items)) {
                return renderAnyOf(definition.items);
            }
            if (Array.isArray(definition.items.anyOf)) {
                return renderAnyOf(definition.items.anyOf);
            }
            if (definition.items.$ref) {
                const itemsRef = (definition.items as Definition).$ref!;
                return (
                    <MessagingRef
                        isArray
                        name={itemsRef}
                        schema={schema}
                        product={product}
                    />
                );
            }
            return <code>{(definition.items as Definition).type}[]</code>;
        } else if (definition.type === "object") {
            if (isCommandArgument(definition)) {
                return null;
            }
            if (definition.properties) {
                return (
                    <>
                        <code>object</code>
                        {listProperties(definition, schema, product)}
                    </>
                );
            }
            if (
                definition.additionalProperties &&
                definition.additionalProperties !== true
            ) {
                if (definition.additionalProperties.type === "string") {
                    return (
                        <code>
                            {(
                                definition.additionalProperties as Definition
                            ).enum
                                ?.map((e) => `"${e}"`)
                                .join(" | ")}
                        </code>
                    );
                }
            }
            return <code>object</code>;
        } else if (Array.isArray(definition.type)) {
            // We already take care of calling out that an argument is optional
            // if one of the allowed types is "null" so we don't need to
            // explicitly include "null"
            const types = definition.type.filter((type) => type !== "null");
            if (types.length === 0) {
                return null;
            }
            if (types.length === 1) {
                return <code>{types[0]}</code>;
            }
            return (
                <>
                    {types.map((type) => (
                        <div key={type}>
                            <code>{type}</code>
                        </div>
                    ))}
                </>
            );
        }

        return <code>{definition.type}</code>;
    }
    // This is a union type
    else if (definition.anyOf) {
        // We already take care of calling out that an argument is optional
        // if one of the allowed types is "null" so we don't need to
        // explicitly include "null"
        const types = definition.anyOf.filter(
            (def) => !((def.type as string) === "null")
        );
        return (
            <>
                {types.length > 1 && <div>Any of:</div>}
                {types.map((option, index) => (
                    // There's not a guaranteed safe identifier we can use for the key prop, fall back to index.
                    <div key={`${option.$ref}-${index}` || index}>
                        <MessagingArgument
                            definition={option}
                            schema={schema}
                            product={product}
                        />
                    </div>
                ))}
            </>
        );
    }

    // Didn't contain an appropriate type. Hopefully the description was useful.
    return <code>unknown</code>;
}
