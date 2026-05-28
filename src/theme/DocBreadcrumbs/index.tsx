import React, {
    ChangeEvent,
    useCallback,
    useContext,
    useMemo,
    type ReactNode,
} from "react";
import DocBreadcrumbs from "@theme-original/DocBreadcrumbs";
import type DocBreadcrumbsType from "@theme/DocBreadcrumbs";
import type { WrapperProps } from "@docusaurus/types";
import {
    FilterPage,
    FilterStateContext,
} from "../../components/ViewerMessaging/FilterStateProvider";

type Props = WrapperProps<typeof DocBreadcrumbsType>;

export default function DocBreadcrumbsWrapper(props: Props): ReactNode {
    const { setFilterText, currentPage, setFilterRef } =
        useContext(FilterStateContext);

    const showFilter = useMemo(
        () => currentPage && Object.values(FilterPage).includes(currentPage),
        [currentPage]
    );

    const onInputChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) =>
            setFilterText?.(event.target?.value),
        [setFilterText]
    );

    return showFilter ? (
        <div
            style={{
                overflowY: "auto",
                position: "sticky",
                top: "var(--ifm-navbar-height)",
                paddingTop: "1rem",
            }}
        >
            <DocBreadcrumbs {...props} />
            <div style={{ display: "flex", marginBottom: "1rem" }}>
                <div style={{ marginTop: "4px" }}>Filter by name: </div>
                <input
                    ref={setFilterRef}
                    style={{
                        marginLeft: "1rem",
                        borderRadius: "5rem",
                        padding: "10px",
                        border: "1px #777 solid",
                        width: "20rem",
                    }}
                    onChange={onInputChange}
                    type="text"
                />
            </div>
        </div>
    ) : (
        <DocBreadcrumbs {...props} />
    );
}
