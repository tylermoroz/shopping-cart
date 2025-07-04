import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "./App.jsx";

describe("Navbar Cart Icon State", () => {
  it("renders the cart icon as empty", () => {
    render(
      <MemoryRouter>
        <App initialCartItems={[]} />
      </MemoryRouter>
    );

    const listItems = screen.getAllByRole("listitem");
    const cartIcon = listItems[2];

    expect(cartIcon).toHaveTextContent("🛒");
  });

  it("renders the cart icon with multiple items when the user adds items to the cart", () => {
    render(
      <MemoryRouter>
        <App
          initialCartItems={[
            { name: "sword", quantity: 1 },
            { name: "shield", quantity: 2 },
            { name: "rapier", quantity: 1 },
            { name: "whip", quantity: 3 },
          ]}
        />
      </MemoryRouter>
    );

    const listItems = screen.getAllByRole("listitem");
    const cartIcon = listItems[2];

    expect(cartIcon).toHaveTextContent("🛒7");
  });
});
