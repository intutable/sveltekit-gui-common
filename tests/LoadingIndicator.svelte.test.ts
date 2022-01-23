import "@testing-library/jest-dom"
import { render } from "@testing-library/svelte"
import LoadingIndicator from "../src/lib/loadingIndicator/LoadingIndicator.svelte"

test("LoadingIndicator displays default title", () => {
    const { getByText } = render(LoadingIndicator)

    expect(getByText("Loading")).toBeInTheDocument()
})

test("LoadingIndicator displays provided title", () => {
    const title = "Some Title"

    const { getByText } = render(LoadingIndicator, { title })

    expect(getByText(title)).toBeInTheDocument()
})
