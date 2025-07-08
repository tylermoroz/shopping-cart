import Product from "./Product";
import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";

const mockProduct = {
  id: 1,
  name: "Godslayer's Greatsword",
  image: "https://example.com/image.jpg",
  description: "Legendary weapon",
  attack: [],
  defence: [],
  scalesWith: [],
  requiredAttributes: [],
  category: "Colossal Sword",
  weight: 17.5,
  value: 41750,
};

describe("Product", () => {
  it("Adds the correct product and quantity to the cart", () => {
    const mockSetCartItems = vi.fn();

    render(
      <Product
        product={mockProduct}
        cartItems={[]}
        setCartItems={mockSetCartItems}
      />
    );

    const input = screen.getByRole("spinbutton");
    const button = screen.getByRole("button", { name: /add to cart/i });

    fireEvent.change(input, { target: { value: "2" } });
    fireEvent.click(button);

    expect(mockSetCartItems).toHaveBeenCalledTimes(1);
    const firstCart = mockSetCartItems.mock.calls[0][0];
    expect(firstCart).toEqual([
      {
        name: "Godslayer's Greatsword",
        img: "https://example.com/image.jpg",
        category: "Colossal Sword",
        value: 41750,
        quantity: 2,
      },
    ]);
  });
  it("Adds to the quantity of the same product with the default button click", () => {
    const mockSetCartItems = vi.fn();

    render(
      <Product
        product={mockProduct}
        cartItems={[
          {
            name: "Godslayer's Greatsword",
            img: "https://example.com/image.jpg",
            category: "Colossal Sword",
            value: 41750,
            quantity: 2,
          },
        ]}
        setCartItems={mockSetCartItems}
      />
    );

    const button = screen.getByRole("button", { name: /add to cart/i });

    fireEvent.click(button);

    expect(mockSetCartItems).toHaveBeenCalledTimes(1);
    const secondCart = mockSetCartItems.mock.calls[0][0];
    expect(secondCart).toEqual([
      {
        name: "Godslayer's Greatsword",
        img: "https://example.com/image.jpg",
        category: "Colossal Sword",
        value: 41750,
        quantity: 3,
      },
    ]);
  });
  it("Adds to the quantity of the same product with the default button click", () => {
    const mockSetCartItems = vi.fn();

    render(
      <Product
        product={mockProduct}
        cartItems={[
          {
            name: "Godslayer's Greatsword",
            img: "https://example.com/image.jpg",
            category: "Colossal Sword",
            value: 41750,
            quantity: 3,
          },
        ]}
        setCartItems={mockSetCartItems}
      />
    );

    const input = screen.getByRole("spinbutton");
    const button = screen.getByRole("button", { name: /add to cart/i });

    fireEvent.change(input, { target: { value: "3" } });
    fireEvent.click(button);

    expect(mockSetCartItems).toHaveBeenCalledTimes(1);
    const thirdCart = mockSetCartItems.mock.calls[0][0];
    expect(thirdCart).toEqual([
      {
        name: "Godslayer's Greatsword",
        img: "https://example.com/image.jpg",
        category: "Colossal Sword",
        value: 41750,
        quantity: 6,
      },
    ]);
  });
});
