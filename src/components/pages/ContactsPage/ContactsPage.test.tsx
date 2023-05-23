import { render, screen } from "@testing-library/react";
import ContactsPage from "./ContactsPage";

describe("Given a ContactsPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'ALL THE SUBJECTS TO THE ORDER'", () => {
      const expectedText = "ALL THE SUBJECTS TO THE ORDER";

      render(<ContactsPage />);
      const heading = screen.getByRole("heading", {
        level: 2,
        name: expectedText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
