import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'ISDEEPWEB'", () => {
      const expectedText = "ISDEEPWEB";
      const routes = [
        {
          path: "/",
          element: <Layout />,
        },
      ];

      const router = createMemoryRouter(routes);

      render(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      );

      const title = screen.getByRole("heading", { name: expectedText });

      expect(title).toBeInTheDocument();
    });
  });
});
