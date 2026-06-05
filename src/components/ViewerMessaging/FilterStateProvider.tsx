import { useLocation } from "@docusaurus/router";
import useIsBrowser from "@docusaurus/useIsBrowser";
import React, {
    createContext,
    PropsWithChildren,
    ReactElement,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

export interface FilterState {
    filterText?: string;
    setFilterText?: (value: string) => void;
    setArgumentFilter?: (value: string) => void;
    currentPage?: string;
    setFilterRef?: (element: HTMLInputElement) => void;
}

export const FilterPage = {
    Commands: "api-commands-operations",
    Events: "api-events",
    Arguments: "api-argument-definitions",
    Components: "api-components",
};

export const FilterStateContext = createContext<FilterState>({});

const FilterStateProvider = ({ children }: PropsWithChildren): ReactElement => {
    const isBrowser = useIsBrowser();

    const [commandFilter, setCommandFilter] = useState("");
    const [eventFilter, setEventFilter] = useState("");
    const [argumentFilter, setArgumentFilter] = useState("");
    const [componentFilter, setComponentFilter] = useState("");
    const [filterText, setFilterText] = useState("");
    const [currentPage, setCurrentPage] = useState("");
    const [currentHash, setCurrentHash] = useState(
        isBrowser ? window.location.hash : ""
    );

    const filterRef = useRef<HTMLInputElement>();
    const location = useLocation();

    // Set stored filter text on page changes.
    useEffect(() => {
        const page = location.pathname.split("/").pop();
        if (
            !page ||
            !Object.values(FilterPage).includes(page) ||
            page === currentPage
        ) {
            return;
        }

        let newFilter: string = "";

        switch (page) {
            case FilterPage.Commands:
                newFilter = commandFilter;
                break;
            case FilterPage.Events:
                newFilter = eventFilter;
                break;
            case FilterPage.Arguments:
                newFilter = argumentFilter;
                break;
            case FilterPage.Components:
                newFilter = componentFilter;
                break;
        }

        setCurrentPage(page ?? "");
        setFilterText(newFilter);

        if (filterRef.current) {
            filterRef.current.value = newFilter;
        }
    }, [location]);

    const setFilterTextExternal = useCallback(
        (value: string) => {
            const page = location.pathname.split("/").pop();
            if (!page || !Object.values(FilterPage).includes(page)) {
                return;
            }

            setFilterText(value);

            switch (page) {
                case FilterPage.Commands:
                    setCommandFilter(value);
                    break;
                case FilterPage.Events:
                    setEventFilter(value);
                    break;
                case FilterPage.Arguments:
                    setArgumentFilter(value);
                    break;
                case FilterPage.Components:
                    setComponentFilter(value);
                    break;
            }

            if (filterRef.current) {
                filterRef.current.value = value;
            }
        },
        [location]
    );

    // Keep the filter text in sync with the hash fragment
    const hashChangeHandler = useCallback(
        () => setCurrentHash(window.location.hash),
        []
    );
    useEffect(() => {
        window.addEventListener("hashchange", hashChangeHandler);
        return () => {
            window.removeEventListener("hashchange", hashChangeHandler);
        };
    }, []);

    useEffect(() => {
        let name = currentHash.split("-").pop();
        if (name?.includes(".")) {
            name = name.split(".").pop();
        }
        if (name && filterText && !name.includes(filterText)) {
            setFilterTextExternal(name);
        }
    }, [currentHash]);

    const setFilterRef = (element: HTMLInputElement) => {
        if (element && filterRef.current !== element) {
            if (filterRef.current) {
                element.value = filterRef.current.value;
            }
            filterRef.current = element;
        }
    };

    const contextValue: FilterState = {
        filterText,
        setFilterText: setFilterTextExternal,
        setArgumentFilter,
        currentPage,
        setFilterRef,
    };

    return (
        <FilterStateContext.Provider value={contextValue}>
            {children}
        </FilterStateContext.Provider>
    );
};

export default FilterStateProvider;
