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
