import ArmamentCarousel from "./ArmamentCarousel";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Armament Carousel", () => {
  it("Renders all legendary weapon slides", () => {
    render(<ArmamentCarousel />);

    const weapon1 = screen.getByAltText("Devourer's Scepter");
    const weapon2 = screen.getByAltText("Bolt of Gransax");
    const weapon3 = screen.getByAltText("Dark Moon Greatsword");
    const weapon4 = screen.getByAltText("Eclipse Shotel");
    const weapon5 = screen.getByAltText("Golden Order Greatsword");
    const weapon6 = screen.getByAltText("Grafted Blade");
    const weapon7 = screen.getByAltText("Marais Executioner's Sword");
    const weapon8 = screen.getByAltText("Ruins Greatsword");
    const weapon9 = screen.getByAltText("Sword of Night and Flame");

    expect(weapon1).toBeInTheDocument();
    expect(weapon2).toBeInTheDocument();
    expect(weapon3).toBeInTheDocument();
    expect(weapon4).toBeInTheDocument();
    expect(weapon5).toBeInTheDocument();
    expect(weapon6).toBeInTheDocument();
    expect(weapon7).toBeInTheDocument();
    expect(weapon8).toBeInTheDocument();
    expect(weapon9).toBeInTheDocument();
  });
});
