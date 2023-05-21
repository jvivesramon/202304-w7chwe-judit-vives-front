import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import LoginPage from "./LoginPage";
import { store } from "../../../store";
import theme from "../../../styles/theme/theme";

describe("Given a HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the text 'Isdeepweb logo'", () => {
      const imageText = "Isdeepweb logo";

      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </ThemeProvider>
      );

      const heading = screen.getByRole("img", {
        name: imageText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a text 'Once you are in, you will stay forever'", () => {
      const text = "Once you are in, you will stay forever";

      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </ThemeProvider>
      );

      const heading = screen.getByRole("heading", {
        name: text,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
