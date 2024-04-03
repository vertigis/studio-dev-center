import React from "react";
import { MessageSchema } from "./schema";
import MessagingTypeSummary from "./MessagingTypeSummary";
import MessagingDefinitionsSummary from "./MessagingDefinitionsSummary";

interface MessagingContentProps {
    schema: MessageSchema;
    type: "argument" | "command" | "event" | "operation" | "config";
    product: "web" | "mobile" | "common";
}

export default function MessagingContent(props: MessagingContentProps) {
    const { schema, type, product } = props;

    return (
        <>
            {(type === "argument" || type === "config") && (
                <MessagingDefinitionsSummary
                    schema={schema}
                    product={product}
                />
            )}
            {type === "command" && (
                <MessagingTypeSummary
                    schema={schema}
                    type="command"
                    product={product}
                />
            )}
            {type === "event" && (
                <MessagingTypeSummary
                    schema={schema}
                    type="event"
                    product={product}
                />
            )}
            {type === "operation" && (
                <MessagingTypeSummary
                    schema={schema}
                    type="operation"
                    product={product}
                />
            )}
        </>
    );
}
