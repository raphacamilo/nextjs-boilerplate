import { render, screen } from "@testing-library/react"

import Main from "."

describe("<Main />", () => {
  it("should render heading", () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole("heading", {
        name: /a next.js starter pack/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
