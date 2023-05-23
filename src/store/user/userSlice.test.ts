import { UserTokenData, UserTokenStructure } from "../../types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer reducer", () => {
  describe("When it receives an empty current user state and a loginUser action with a payload", () => {
    test("Then it should return a new state with a logged user", () => {
      const currentState: UserTokenData = {
        id: "",
        name: "",
        token: "",
        isLogged: false,
      };

      const userToken: UserTokenStructure = {
        id: "1234",
        name: "Luis",
        token: "mock-token",
      };

      const expectedNewstate: UserTokenData = {
        id: "1234",
        name: "Luis",
        token: "mock-token",
        isLogged: true,
      };

      const newUserState = userReducer(
        currentState,
        loginUserActionCreator(userToken)
      );

      expect(newUserState).toStrictEqual(expectedNewstate);
    });
  });
});
