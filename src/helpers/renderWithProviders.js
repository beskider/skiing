import { render } from "@testing-library/react"
import { ResortsProvider } from "providers/ResortsProvider"
import { ThemeProvider } from "styled-components"
import { theme } from "assets/styles/theme"
import { NewsProvider } from "providers/NewsProvider"

export const renderWithProviders = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <ResortsProvider>
        <NewsProvider>
          {children}
        </NewsProvider>
      </ResortsProvider>
    </ThemeProvider>
  )
}
