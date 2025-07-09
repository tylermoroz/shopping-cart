import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  createMemoryRouter,
  MemoryRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import routes from "./router.jsx";

beforeEach(() => {
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          data: [
            {
              id: 1,
              name: "Godslayer's Greatsword",
              image: "https://example.com/image.jpg",
              description:
                "Sacred sword of the Dusk-Eyed Queen who controlled the Godskin Apostles before her defeat at the hands of Maliketh. The black flames wielded by the apostles are channeled from this sword.",
              attack: [],
              defence: [],
              scalesWith: [],
              requiredAttributes: [],
              category: "Colossal Sword",
              weight: 17.5,
              value: 41750,
            },
          ],
        }),
    })
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Navbar Cart Icon State", () => {
  it("renders the cart icon as empty", () => {
    render(
      <MemoryRouter>
        <App initialCartItems={[]} />
      </MemoryRouter>
    );

    const cartIcon = screen.getByTestId("cart-icon");

    expect(cartIcon).toHaveTextContent("🛒");
  });

  it("renders the cart icon with multiple items when the cart state changes", () => {
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

    const cartIcon = screen.getByTestId("cart-icon");

    expect(cartIcon).toHaveTextContent("🛒7");
  });
  it("Clicking the add to cart button updates the cart state", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });

    render(<RouterProvider router={router} />);

    const input = await screen.findByRole("spinbutton");
    const button = await screen.findByRole(
      "button",
      { name: /add to cart/i },
      { timeout: 3000 }
    );

    fireEvent.click(button);

    const cartIcon = screen.getByTestId("cart-icon");

    expect(cartIcon).toHaveTextContent("🛒1");

    fireEvent.change(input, { target: { value: "2" } });
    fireEvent.click(button);

    expect(cartIcon).toHaveTextContent("🛒3");
  });
});
