import { screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { renderWithProviders } from "../../../testUtils/testUtils";

describe("Given a LoginPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the text 'Isdeepweb logo'", () => {
      const imageText = "Isdeepweb logo";

      renderWithProviders(<LoginPage />);

      const heading = screen.getByRole("img", {
        name: imageText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a text 'Trust the method'", () => {
      const text = "Trust the method";

      renderWithProviders(<LoginPage />);

      const heading = screen.getByRole("heading", {
        name: text,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
