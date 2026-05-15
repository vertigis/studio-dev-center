import React, { useMemo } from "react";
import { MessageSchema } from "./schema";
import MessagingTypeSummary from "./MessagingTypeSummary";
import MessagingDefinitionsSummary from "./MessagingDefinitionsSummary";

interface MessagingContentProps {
    schema: MessageSchema;
    type: "argument" | "command" | "event" | "operation" | "config";
    product: "web" | "mobile";
}

export default function MessagingContent(props: MessagingContentProps) {
    const { schema, type, product } = props;

    const messagingContent = useMemo(() => {
        switch (type) {
            case "argument":
            case "config":
                return (
                    <MessagingDefinitionsSummary
                        schema={schema}
                        product={product}
                        type={type}
                    />
                );
            case "command":
            case "event":
            case "operation":
                return (
                    <MessagingTypeSummary
                        schema={schema}
                        type={type}
                        product={product}
                    />
                );
        }
    }, [schema, type, product]);

    return messagingContent;
}
