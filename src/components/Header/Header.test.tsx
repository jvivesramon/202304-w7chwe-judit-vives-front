import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import Header from "./Header";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("it should show an image with the text 'Isdeepweb logo'", () => {
      const imageText = "Isdeepweb logo";

      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Header />
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
