import { FC, PropsWithChildren } from "react";
import FilterStateProvider from "../components/ViewerMessaging/FilterStateProvider";

const Root: FC<PropsWithChildren> = ({ children }) => (
    <FilterStateProvider>{children}</FilterStateProvider>
);

export default Root;
