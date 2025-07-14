import Cart from "./Cart";
import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Outlet, Routes, Route } from "react-router-dom";

const renderWithCart = (cartItems) => {
  const MockLayout = () => (
    <Outlet context={{ cartItems, setCartItems: vi.fn() }} />
  );

  render(
    <MemoryRouter initialEntries={["/cart"]}>
      <Routes>
        <Route element={<MockLayout />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

describe("Cart displays proper data", () => {
  it("Renders items from cart data", () => {
    const mockCartItems = [
      {
        name: "Godslayer's Greatsword",
        quantity: 1,
        img: "https://example.com/image.jpg",
        category: "Colossal Sword",
        value: 41750,
      },
    ];

    renderWithCart(mockCartItems);

    const item = screen.getByText(/godslayer's greatsword/i);
    expect(item).toBeInTheDocument();
  });

  it("Renders an empty cart when data is empty", () => {
    const mockCartItems = [];

    renderWithCart(mockCartItems);

    const emptyCart = screen.getByText(/your cart is empty/i);
    expect(emptyCart).toBeInTheDocument();
  });

  it("Calculates the total value of the cart", () => {
    const mockCartItems = [
      {
        name: "Godslayer's Greatsword",
        quantity: 3,
        img: "https://example.com/image.jpg",
        category: "Colossal Sword",
        value: 41750,
      },
      {
        name: "Maliketh's Black Blade",
        quantity: 2,
        img: "https://example.com/image.jpg",
        category: "Colossal Sword",
        value: 39000,
      },
    ];

    renderWithCart(mockCartItems);

    expect(screen.getByText(/Total: 203250 Runes/i)).toBeInTheDocument();
  });

  it("Displays the quantity of the item in the cart", () => {
    const mockCartItems = [
      {
        name: "Godslayer's Greatsword",
        quantity: 5,
        img: "https://example.com/image.jpg",
        category: "Colossal Sword",
        value: 41750,
      },
    ];

    renderWithCart(mockCartItems);

    const quantity = screen.getByRole("spinbutton");
    expect(quantity).toHaveValue(5);
  });
});
