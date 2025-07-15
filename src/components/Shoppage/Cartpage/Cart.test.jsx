import Cart from "./Cart";
import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Outlet, Routes, Route } from "react-router-dom";
import { useState } from "react";

const renderWithCart = (initialItems) => {
  const MockLayout = ({ initialItems }) => {
    const [cartItems, setCartItems] = useState(initialItems);
    return <Outlet context={{ cartItems, setCartItems }} />;
  };

  render(
    <MemoryRouter initialEntries={["/cart"]}>
      <Routes>
        <Route element={<MockLayout initialItems={initialItems} />}>
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

  it("User can change the quantity of an item in the cart", async () => {
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

    const newQuantity = screen.getByRole("spinbutton");

    fireEvent.change(newQuantity, { target: { value: "2" } });
    fireEvent.blur(newQuantity);

    const total = await screen.findByText(/Total: 83500 Runes/i);

    expect(newQuantity).toHaveValue(2);
    expect(total).toBeInTheDocument();
  });

  it("User can delete an item from the cart", async () => {
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

    const deleteButton = screen.getByRole("button", {
      name: /remove from cart/i,
    });

    fireEvent.click(deleteButton);

    const total = await screen.findByText(/Total: 0 Runes/i);
    const item = screen.queryByText(/godslayer's greatsword/i);

    expect(item).not.toBeInTheDocument();
    expect(total).toBeInTheDocument();
  });
});
