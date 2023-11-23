import { logRoles, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "../../src/pages/Layout";

test("heading present", () => {
  const { container } = render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );
  const heading = screen.getByRole("heading");
  expect(heading).toHaveTextContent(/library management system/i);
});

test("empty test", () => {});
