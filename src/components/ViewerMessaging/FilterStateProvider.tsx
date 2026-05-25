import {
    createContext,
    PropsWithChildren,
    ReactElement,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { useInterval } from "./hooks";

export interface FilterState {
    filterText?: string;
    setFilterText?: (value: string) => void;
    currentPage?: string;
    setFilterRef?: (element: HTMLInputElement) => void;
}

export const FilterPage = {
    Commands: "Commands and Operations Reference",
    Events: "Events Reference",
    Arguments: "Argument Definition Reference",
    Components: "Components and Services",
};

export const FilterStateContext = createContext<FilterState>({});

const FilterStateProvider = ({ children }: PropsWithChildren): ReactElement => {
    const [commandFilter, setCommandFilter] = useState("");
    const [eventFilter, setEventFilter] = useState("");
    const [argumentFilter, setArgumentFilter] = useState("");
    const [componentFilter, setComponentFilter] = useState("");
    const [currentPage, setCurrentPage] = useState<string>();
    const [filterText, setFilterText] = useState("");

    const filterRef = useRef<HTMLInputElement>();

    useEffect(() => {
        let newFilter: string = "";

        switch (currentPage) {
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
        setFilterText(newFilter);
        if (filterRef.current) {
            filterRef.current.value = newFilter;
        }
    }, [currentPage]);

    const setFilterTextExternal = useCallback(
        (value: string) => {
            setFilterText(value);
            switch (currentPage) {
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
        },
        [currentPage]
    );

    const setFilterRef = (element: HTMLInputElement) =>
        (filterRef.current = element);

    const contextValue: FilterState = {
        filterText,
        setFilterText: setFilterTextExternal,
        currentPage,
        setFilterRef,
    };

    useInterval(
        () =>
            setCurrentPage(
                Array.from(
                    document.getElementsByClassName("breadcrumbs__link")
                ).pop()?.innerHTML
            ),
        300
    );

    return (
        <FilterStateContext.Provider value={contextValue}>
            {children}
        </FilterStateContext.Provider>
    );
};

export default FilterStateProvider;
