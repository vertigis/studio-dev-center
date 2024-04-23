import { MessageSchema, Definition } from "./schema";

export function trimDefinitionsName(def: string) {
    return def.replace("#/definitions/", "");
}

export function getArgumentDefinitionLink(
    def: string | undefined,
    product: "web" | "mobile" = "web"
): string | undefined {
    if (!def || def === "") {
        return undefined;
    }
    const name = trimDefinitionsName(def);
    // Hardcoded links so that we have something to say about these common
    // objects.
    if (name === "Features" || name === "Feature") {
        return `docs/web/api-objects#features`;
    }
    if (name === "FeatureSource") {
        return `docs/web/api-objects#featuresource`;
    }
    if (name.endsWith("Extension")) {
        return `docs/web/api-objects#extensions`;
    }
    return window?.location.href.includes("api-argument-definitions")
        ? `#definition-${name}`
        : `docs/${product}/api-argument-definitions#definition-${name}`;
}

export function getArgumentDefinitionLinkId(def: string): string | undefined {
    return getArgumentDefinitionLink(def)?.split("#")[1];
}

export function getActionOrEventDefinitionLinkId(
    def: string,
    type: "command" | "event" | "operation"
) {
    return `${type}-${def}`;
}

export function getReferencedDefinition(
    name: string,
    schema: MessageSchema
): Definition | undefined {
    const trimmedName = trimDefinitionsName(name);
    // Explicitly ignore SingleCommand and SingleOperation as they result in a
    // large list of `unknown` properties.
    if (
        trimmedName.startsWith("viewer-spec.SingleCommand") ||
        trimmedName.startsWith("viewer-spec.SingleOperation")
    ) {
        return;
    }
    return schema.definitions[trimmedName];
}

/**
 * This follows the `FeaturesLike` type defined in viewer-spec:
 *
 * ```
 * export type FeaturesLike =
 *   | Feature
 *   | FeatureSet
 *   | FeatureList
 *   | FeatureStream
 *   | (Feature | FeatureProperties)[];
 * ```
 *
 * Of these, only FeatureProperties[] is documented in the schema. The rest will
 * be redirected to a custom page in the docs instead.
 */
export function isFeaturesLike(defs: Definition[] | undefined): boolean {
    if (!defs) {
        return false;
    }
    const refs = defs.map((def) => def.$ref);
    if (
        refs.includes("@vertigis.arcgis-extensions.data.Feature.Feature") ||
        refs.includes(
            "@vertigis.arcgis-extensions.data.FeatureSet.FeatureSet"
        ) ||
        refs.includes(
            "@vertigis.arcgis-extensions.data.FeatureList.FeatureList"
        ) ||
        refs.includes(
            "@vertigis.arcgis-extensions.data.FeatureStream.FeatureStream"
        )
    ) {
        return true;
    }
    return false;
}

/**
 * Given a collection of defs, replace undocumented API feature objects with
 * something we can use to link to a custom page.
 */
export function replaceFeaturesLike(defs: Definition[]): Definition[] {
    const newDefs = defs.slice();
    const featureTypes: string[] = [];

    const featureIndex = newDefs.findIndex(
        (def) => def.$ref === "@vertigis.arcgis-extensions.data.Feature.Feature"
    );
    if (featureIndex >= 0) {
        newDefs.splice(featureIndex, 1);
        featureTypes.push("Feature");
    }

    const featureSetIndex = newDefs.findIndex(
        (def) =>
            def.$ref ===
            "@vertigis.arcgis-extensions.data.FeatureSet.FeatureSet"
    );
    if (featureSetIndex >= 0) {
        newDefs.splice(featureSetIndex, 1);
        featureTypes.push("FeatureSet");
    }

    const featureListIndex = newDefs.findIndex(
        (def) =>
            def.$ref ===
            "@vertigis.arcgis-extensions.data.FeatureList.FeatureList"
    );
    if (featureListIndex >= 0) {
        newDefs.splice(featureListIndex, 1);
        featureTypes.push("FeatureList");
    }

    const featureStreamIndex = newDefs.findIndex(
        (def) =>
            def.$ref ===
            "@vertigis.arcgis-extensions.data.FeatureStream.FeatureStream"
    );
    if (featureStreamIndex >= 0) {
        newDefs.splice(featureStreamIndex, 1);
        featureTypes.push("FeatureStream");
    }

    const arrayDefs = newDefs.filter((def) => def.type === "array");
    arrayDefs.forEach((arrayDef) => {
        const newArrayDefs = (arrayDef?.items as Definition)?.anyOf?.slice();
        if (newArrayDefs) {
            const featureArrayIndex = newArrayDefs.findIndex(
                (def) =>
                    def.$ref ===
                    "@vertigis.arcgis-extensions.data.Feature.Feature"
            );
            if (featureArrayIndex >= 0) {
                newArrayDefs?.splice(featureArrayIndex, 1);
                featureTypes.push("Feature[]");
            }
            (arrayDef.items as Definition).anyOf = newArrayDefs;
        }
    });

    newDefs.splice(featureIndex >= 0 ? featureIndex : 0, 0, {
        $ref: `@vertigis.api-docs.Features ${featureTypes.join(", ")}`,
    });

    return newDefs;
}
