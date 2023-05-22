import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import { tokenMock, userCredentials } from "../../store/mocks/mocks";

describe("Given a getUserToken function,", () => {
  describe("When it is called,", () => {
    test("Then it should return the token", async () => {
      const { token } = tokenMock;

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const expectedToken = await getUserToken(userCredentials);

      expect(expectedToken).toStrictEqual(token);
    });
  });
});
