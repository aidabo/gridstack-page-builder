import { ComponentMapProvider, ComponentPropsProvider, GoBackListFn, LoadLayoutFn, SaveLayoutFn } from "./stackoptions";
import "../styles/index.css";
export default function StackPage({ pageid, pageMode, onLoadLayout, onSaveLayout, componentMapProvider, componentPropsProvider, gobackList, }: {
    pageid: string;
    pageMode: "edit" | "read" | "preview";
    onLoadLayout: LoadLayoutFn;
    onSaveLayout?: SaveLayoutFn;
    componentMapProvider?: ComponentMapProvider;
    componentPropsProvider?: ComponentPropsProvider;
    gobackList: GoBackListFn;
}): import("react/jsx-runtime").JSX.Element;
