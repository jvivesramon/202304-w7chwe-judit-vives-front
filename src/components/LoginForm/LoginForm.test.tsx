import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import LoginForm from "./LoginForm";

beforeAll(() => vi.clearAllMocks());

describe("Given a LoginForm component", () => {
  const usernameInputText = "Judit";
  const passwordInputText = "Judit";

  describe("When rendered", () => {
    test("Then it should show an input with a placeholder text 'username:' and an input with a placeholder text with 'password:'", () => {
      render(<LoginForm />);

      const usernamePlaceholder = screen.getByPlaceholderText("username:");
      const passwordPlaceholder = screen.getByPlaceholderText("password:");

      expect(usernamePlaceholder).toBeInTheDocument();
      expect(passwordPlaceholder).toBeInTheDocument();
    });

    test("Then it should show a disable button with the text 'Login'", () => {
      render(<LoginForm />);

      const loginButton = screen.getByRole("button", {
        name: /login/i,
      });

      expect(loginButton).toBeDisabled();
    });

    test("Then it should show an enable button with the text 'Login'", async () => {
      render(<LoginForm />);

      const usernamePlaceholder = screen.getByPlaceholderText("username:");
      const passwordPlaceholder = screen.getByPlaceholderText("password:");

      await userEvent.type(usernamePlaceholder, usernameInputText);
      await userEvent.type(passwordPlaceholder, passwordInputText);

      const loginButton = screen.getByRole("button", {
        name: /login/i,
      });

      expect(loginButton).toBeEnabled();
    });
  });

  describe("When the user types 'Judit' in the username text field and in the password text field", () => {
    test("Then the username field should show 'Judit'", async () => {
      render(<LoginForm />);

      const usernamePlaceholder = screen.getByPlaceholderText("username:");

      await userEvent.type(usernamePlaceholder, usernameInputText);

      expect(usernamePlaceholder).toHaveValue(usernameInputText);
    });

    test("Then the password field should show 'Judit'", async () => {
      render(<LoginForm />);

      const passwordPlaceholder = screen.getByPlaceholderText("password:");

      await userEvent.type(passwordPlaceholder, passwordInputText);

      expect(passwordPlaceholder).toHaveValue(passwordInputText);
    });
  });
});
