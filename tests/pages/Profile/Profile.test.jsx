import Profile from "../../../src/pages/Profile/Profile";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  signedInUser,
  setSignedInUser,
  testSignedInUser,
} from "../../testHelpers";

beforeEach(() => {
  setSignedInUser(testSignedInUser);
  window.localStorage.setItem("signedInUser", JSON.stringify(signedInUser));
  render(
    <MemoryRouter>
      <Profile signedInUser={signedInUser} setSignedInUser={setSignedInUser} />
    </MemoryRouter>
  );
});

test("logout logs out the user", () => {
  const logoutButton = screen.getByRole("button", { name: /log out/i });
  fireEvent.click(logoutButton);
  expect(window.localStorage.getItem("signedInUser")).toBeNull();
  expect(signedInUser).toBeNull();
});
