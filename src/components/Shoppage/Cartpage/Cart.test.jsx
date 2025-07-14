import Cart from "./Cart";
import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Outlet, Routes, Route } from "react-router-dom";

describe("Cart displays proper data", () => {
  it("Render's items from cart data", () => {
    const mockCartItems = [
      {
        name: "Godslayer's Greatsword",
        quantity: 1,
        img: "https://example.com/image.jpg",
        category: "Colossal Sword",
        value: 41750,
      },
    ];

    const MockLayout = () => {
      return (
        <Outlet context={{ cartItems: mockCartItems, setCartItems: vi.fn() }} />
      );
    };

    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Routes>
          <Route element={<MockLayout />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const item = screen.getByText(/godslayer's greatsword/i);
    expect(item).toBeInTheDocument();
  });

  it("Render's an empty cart when data is empty", () => {
    const mockCartItems = [];

    const MockLayout = () => {
      return (
        <Outlet context={{ cartItems: mockCartItems, setCartItems: vi.fn() }} />
      );
    };

    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Routes>
          <Route element={<MockLayout />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

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

    const MockLayout = () => {
      return (
        <Outlet context={{ cartItems: mockCartItems, setCartItems: vi.fn() }} />
      );
    };

    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Routes>
          <Route element={<MockLayout />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

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

    const MockLayout = () => {
      return (
        <Outlet context={{ cartItems: mockCartItems, setCartItems: vi.fn() }} />
      );
    };

    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Routes>
          <Route element={<MockLayout />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const quantity = screen.getByRole("spinbutton");
    expect(quantity).toHaveValue(5);
  });
});
