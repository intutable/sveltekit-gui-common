import LoadingIndicator from "./loadingIndicator/LoadingIndicator.svelte"
import OutputPanel from "./output/OutputPanel.svelte"

// Class has to be redefined here, because import from "./output/types" does not work in main GUI
export class Output {
    constructor(public type: OutputType, public message: string) {}
}

// Class has to be redefined here, because import from "./output/types" does not work in main GUI
export enum OutputType {
    Log = "Log",
    Info = "Info",
    Debug = "Debug",
    Warn = "Warn",
    Error = "Error",
}

export { LoadingIndicator, OutputPanel }
