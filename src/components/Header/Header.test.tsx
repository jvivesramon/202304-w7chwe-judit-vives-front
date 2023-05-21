import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../../store";
import theme from "../../styles/theme/theme";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'ISDEEPWEB'", () => {
      const titleText = "ISDEEPWEB";

      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Header />
          </Provider>
        </ThemeProvider>
      );

      const heading = screen.getByRole("heading", {
        name: titleText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
