import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../../../src/pages/Home/Home";
import { beforeAll, beforeEach, expect, test } from "vitest";
import {
  signedInUser,
  setSignedInUser,
  testSignedInUser,
} from "../../testHelpers";

beforeEach(() => {
  setSignedInUser(testSignedInUser);
  window.localStorage.setItem("signedInUser", JSON.stringify(testSignedInUser));
  render(
    <Home signedInUser={signedInUser} setSignedInUser={setSignedInUser} />
  );
});

test("heading present", () => {
  const heading = screen.getByRole("heading");
  expect(heading).toHaveTextContent(/home/i);
});
