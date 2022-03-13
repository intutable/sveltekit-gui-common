import LoadingIndicator from "./loadingIndicator/LoadingIndicator.svelte"
import OutputPanel from "./output/OutputPanel.svelte"

export class Output {
    constructor(public type: OutputType, public message: string) {}
}

export enum OutputType {
    Log = "Log",
    Info = "Info",
    Debug = "Debug",
    Warn = "Warn",
    Error = "Error",
}

export { LoadingIndicator, OutputPanel }
