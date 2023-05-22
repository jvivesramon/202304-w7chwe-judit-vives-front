import { RouterProvider } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import appRouter from "./appRouter";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given a appRouter", () => {
  describe("When it redirects to HomePage", () => {
    test("It should render a heading with the text 'Trust the method'", () => {
      const headingText = "Trust the method";

      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <RouterProvider router={appRouter} />
          </Provider>
        </ThemeProvider>
      );

      const title = screen.getByRole("heading", { name: headingText });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show an image with the text 'Isdeepweb logo'", () => {
      const imageText = "Isdeepweb logo";

      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <RouterProvider router={appRouter} />
          </Provider>
        </ThemeProvider>
      );

      const heading = screen.getByRole("img", {
        name: imageText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
