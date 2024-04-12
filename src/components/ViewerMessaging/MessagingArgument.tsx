import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import React from "react";
import { Definition, MessageSchema, PrimitiveType } from "./schema";
import MessagingRef from "./MessagingRef";
import { getArgumentDefinitionLink, getReferencedDefinition } from "./utils";
import useBaseUrl from "@docusaurus/useBaseUrl";

interface MessagingArgumentProps {
    definition: Definition | string | undefined;
    schema: MessageSchema;
    product: "web" | "mobile";
}

hljs.registerLanguage("javascript", javascript);

const linkRegex = /{@link ?([\S\s]*?)}/;
const globalLinkRegex = new RegExp(linkRegex, "g");
const singleLinkRegex = /([S|s]ee ?{@link ?)([\S\s]*?)}/;

const marked = new Marked(
    markedHighlight({
        highlight(code) {
            return hljs.highlight(code, { language: "javascript" }).value;
        },
    })
);

const renderMarkdown = (text: string): JSX.Element => (
    <span
        dangerouslySetInnerHTML={{
            __html:
                text.includes("|\n|") || text.includes("```")
                    ? marked.parse(text, { async: false, breaks: true })
                    : marked.parseInline(text, { async: false, breaks: true }),
        }}
    />
);

export function getDescription(
    definition: Definition,
    schema: MessageSchema,
    className: string,
    product: "web" | "mobile"
): JSX.Element | undefined {
    let { description } = definition;
    if (!description) {
        return undefined;
    }

    const parts = description.match(globalLinkRegex);
    if (!parts) {
        return <div className={className}>{renderMarkdown(description)}</div>;
    }
    const getDefinition = (
        text: string | undefined
    ): Definition | undefined => {
        if (text?.includes(".")) {
            const key = text?.split(".")[0];
            const property = text?.split(".")[1];
            return (key &&
                property &&
                schema.definitions[key]?.properties?.[property]) as Definition;
        } else if (text) {
            return schema.definitions[text];
        }
        return undefined;
    };

    // Descriptions consisting only of a link can be replaced.
    if (
        parts.length === 1 &&
        description.toLocaleLowerCase().match(singleLinkRegex)
    ) {
        const linkText = description
            .toLocaleLowerCase()
            .match(singleLinkRegex)?.[2];
        const referencedDef = definition.$ref
            ? getReferencedDefinition(definition.$ref, schema)
            : getDefinition(linkText);
        return referencedDef
            ? getDescription(referencedDef, schema, className, product)
            : undefined;
    }

    // Link to any references found in the description.
    const formatPart = (link: string, index: number): JSX.Element[] => {
        const linkIndex = description?.indexOf(link) ?? 0;
        const start = description?.slice(0, linkIndex);
        const remaining = description?.slice(linkIndex);
        const linkMatch = link?.match(linkRegex);
        let displayText = (linkMatch?.[1] ?? linkMatch?.[2])?.trim();
        if (displayText?.includes("!")) {
            displayText = displayText.split("!")[1];
        }
        const isExternalLink = displayText?.startsWith("http");
        const referenceLink =
            displayText && schema.definitions[displayText]
                ? useBaseUrl(getArgumentDefinitionLink(displayText, product))
                : isExternalLink
                ? displayText
                : undefined;

        const linkElement = referenceLink ? (
            <a
                href={referenceLink}
                target={isExternalLink ? "_blank" : "_self"}
            >
                {displayText}
            </a>
        ) : (
            displayText
        );

        description = remaining?.slice(link.length);

        if (index === 0) {
            if (parts.length === 1) {
                return [
                    <span>{renderMarkdown(start!)}</span>,
                    <code>{linkElement}</code>,
                    <>{renderMarkdown(remaining?.slice(link.length)!)}</>,
                ];
            }
            return [
                <span>{renderMarkdown(start!)}</span>,
                <code>{linkElement}</code>,
                <>
                    {renderMarkdown(
                        description?.slice(
                            0,
                            description?.indexOf(parts[index + 1])
                        )!
                    )}
                </>,
            ];
        }
        if (description?.length! > 0) {
            if (index < parts.length - 1) {
                return [
                    <code>{linkElement}</code>,
                    <>
                        {renderMarkdown(
                            description?.slice(
                                0,
                                description?.indexOf(parts[index + 1])
                            )!
                        )}
                    </>,
                ];
            }
            return [
                <code>{linkElement}</code>,
                <>{renderMarkdown(remaining?.slice(link.length)!)}</>,
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
                                    "margin-top--sm",
                                    product
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
