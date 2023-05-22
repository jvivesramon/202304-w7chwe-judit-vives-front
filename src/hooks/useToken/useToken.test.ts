import { tokenData, tokenMock } from "../../store/mocks/mocks";
import useToken from "./useToken";

describe("Given a useToken function", () => {
  describe("When it receives a token", () => {
    test("Then it should call the getTokenData and return the decode token", () => {
      const { token } = tokenMock;
      const expectedTokenData = tokenData;

      const { getTokenData } = useToken();

      const test = getTokenData(token);

      expect(test).toStrictEqual(expectedTokenData);
    });
  });
});
