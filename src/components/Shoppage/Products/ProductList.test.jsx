import { render, screen, waitFor, within } from "@testing-library/react";
import ProductList from "./ProductList";
import { expect, afterEach, beforeEach, vi, describe, it } from "vitest";

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
              attack: [
                { name: "Phy", amount: 119 },
                { name: "Mag", amount: 0 },
                { name: "Fire", amount: 77 },
                { name: "Ligt", amount: 0 },
                { name: "Holy", amount: 0 },
                { name: "Crit", amount: 100 },
              ],
              defence: [
                { name: "Phy", amount: 49 },
                { name: "Mag", amount: 38 },
                { name: "Fire", amount: 49 },
                { name: "Ligt", amount: 38 },
                { name: "Holy", amount: 38 },
                { name: "Boost", amount: 40 },
              ],
              scalesWith: [
                { name: "Str", scaling: "D" },
                { name: "Dex", scaling: "D" },
                { name: "Fai", scaling: "D" },
              ],
              requiredAttributes: [
                { name: "Str", amount: 20 },
                { name: "Dex", amount: 22 },
                { name: "Fai", amount: 20 },
              ],
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

describe("ProductList", () => {
  it("Renders Weapon Data From The API", async () => {
    render(<ProductList />);

    expect(screen.getByText(/Loading weapons.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Godslayer's Greatsword")).toBeInTheDocument();

      const attackTable = document.querySelector(".attack");
      const attack = within(attackTable);
      expect(attack.getByText("Attack")).toBeInTheDocument();
      expect(attack.getByText("Phy")).toBeInTheDocument();
      expect(attack.getByText("119")).toBeInTheDocument();
      expect(attack.getByText("Mag")).toBeInTheDocument();
      expect(attack.getAllByText("0")).toHaveLength(3);
      expect(attack.getByText("Fire")).toBeInTheDocument();
      expect(attack.getByText("77")).toBeInTheDocument();
      expect(attack.getByText("Ligt")).toBeInTheDocument();
      expect(attack.getByText("Holy")).toBeInTheDocument();
      expect(attack.getByText("Crit")).toBeInTheDocument();
      expect(attack.getByText("100")).toBeInTheDocument();

      const defenceTable = document.querySelector(".defence");
      const defence = within(defenceTable);
      expect(defence.getByText("Guard")).toBeInTheDocument();
      expect(defence.getByText("Phy")).toBeInTheDocument();
      expect(defence.getAllByText("49")).toHaveLength(2);
      expect(defence.getByText("Mag")).toBeInTheDocument();
      expect(defence.getAllByText("38")).toHaveLength(3);
      expect(defence.getByText("Fire")).toBeInTheDocument();
      expect(defence.getByText("Ligt")).toBeInTheDocument();
      expect(defence.getByText("Holy")).toBeInTheDocument();
      expect(defence.getByText("Boost")).toBeInTheDocument();
      expect(defence.getByText("40")).toBeInTheDocument();

      const scalingTable = document.querySelector(".scaling");
      const scaling = within(scalingTable);
      expect(scaling.getByText("Scaling")).toBeInTheDocument();
      expect(scaling.getByText("Str")).toBeInTheDocument();
      expect(scaling.getAllByText("D")).toHaveLength(3);
      expect(scaling.getByText("Dex")).toBeInTheDocument();
      expect(scaling.getByText("Fai")).toBeInTheDocument();

      const reqTable = document.querySelector(".requirements");
      const req = within(reqTable);
      expect(req.getByText("Requires")).toBeInTheDocument();
      expect(req.getByText("Str")).toBeInTheDocument();
      expect(req.getAllByText("20")).toHaveLength(2);
      expect(req.getByText("Dex")).toBeInTheDocument();
      expect(req.getByText("22")).toBeInTheDocument();
      expect(req.getByText("Fai")).toBeInTheDocument();

      expect(screen.getByText("Colossal Sword")).toBeInTheDocument();

      const weightTable = document.querySelector(".weapon-weight");
      const weight = within(weightTable);
      expect(weight.getByText("Weight")).toBeInTheDocument();
      expect(weight.getByText("17.5")).toBeInTheDocument();

      const valueTable = document.querySelector(".weapon-value");
      const value = within(valueTable);
      expect(value.getByText("Runes")).toBeInTheDocument();
      expect(value.getByText("41750")).toBeInTheDocument();
    });
  });
});
