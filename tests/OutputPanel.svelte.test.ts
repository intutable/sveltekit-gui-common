import "@testing-library/jest-dom"
import { render } from "@testing-library/svelte"
import { Output, OutputType } from "../src/lib/output/types"
import OutputPanel from "../src/lib/output/OutputPanel.svelte"

test("OutputPanel displays default message", () => {
    const { container, getByText } = render(OutputPanel)

    expect(getByText("INFO")).toBeInTheDocument()
    expect(getByText("No output available")).toBeInTheDocument()
    expect(container.querySelector(".info")).toBeInTheDocument()
})

test("OutputPanel displays provided info message", () => {
    const output = new Output(OutputType.Info, "No output available")

    const { container, getByText } = render(OutputPanel, { output })

    expect(getByText("INFO")).toBeInTheDocument()
    expect(getByText(output.message)).toBeInTheDocument()
    expect(container.querySelector(".info")).toBeInTheDocument()
})

test("OutputPanel displays provided error message", () => {
    const output = new Output(OutputType.Error, "Unexpected Error")

    const { container, getByText } = render(OutputPanel, { output })

    expect(getByText("ERROR")).toBeInTheDocument()
    expect(getByText(output.message)).toBeInTheDocument()
    expect(container.querySelector(".error")).toBeInTheDocument()
})
