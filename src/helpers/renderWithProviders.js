import { render } from "@testing-library/react"
import { ResortsProvider } from "providers/ResortsProvider"
import { ThemeProvider } from "styled-components"
import { theme } from "assets/styles/theme"

export const renderWithProviders = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <ResortsProvider>
        {children}
      </ResortsProvider>
    </ThemeProvider>
  )
}
