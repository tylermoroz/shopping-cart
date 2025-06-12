import { useState, useEffect } from "react";
import Product from "./Product.jsx";
import "./ProductList.css";

const selection = [
  "Rivers of Blood",
  "Dark Moon Greatsword",
  "Moonveil",
  "Blasphemous Blade",
  "Eclipse Shotel",
  "Grafted Blade Greatsword",
  "Golden Order Greatsword",
  "Marais Executioner's Sword",
  "Ruins Greatsword",
  "Sword of Night and Flame",
  "Bolt of Gransax",
  "Devourer's Scepter",
  "Marika's Hammer",
  "Sacred Relic Sword",
  "Morgott's Cursed Sword",
  "Dragon King's Cragblade",
  "Ordovis's Greatsword",
  "Death's Poker",
  "Godslayer's Greatsword",
  "Maliketh's Black Blade",
  "Wing of Astel",
  "Nagakiba",
  "Meteoric Ore Blade",
  "Serpentbone Blade",
  "Dragonscale Blade",
  "Hand of Malenia",
  "Eleonora's Poleblade",
  "Vyke's War Spear",
  "Mohgwyn's Sacred Spear",
  "Serpent-Hunter",
  "Siluria's Tree",
  "Cross-Naginata",
  "Star Fist",
  "Lusat's Glintstone Staff",
  "Azur's Glintstone Staff",
  "Meteorite Staff",
  "Prince of Death's Staff",
  "Carian Regal Scepter",
  "Staff of Loss",
  "Dragon Communion Seal",
  "Frenzy Flame Seal",
  "Godslayer's Seal",
  "Gravel Stone Seal",
  "Golden Order Seal",
  "Blade of Calling",
  "Black Knife",
  "Reduvia",
  "Glintstone Kris",
  "Misericorde",
  "Regalia of Eochaid",
  "Golden Epitaph",
  "Alabaster Lord's Sword",
  "Helphen's Steeple",
  "Claymore",
  "Death Ritual Spear",
];

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const maxPages = 3;
    const foundWeapons = [];

    const fetchPagesUntilFound = async () => {
      for (let page = 0; page < maxPages; page++) {
        try {
          const res = await fetch(
            `https://eldenring.fanapis.com/api/weapons?limit=100&page=${page}`
          );
          const data = await res.json();

          const matches = data.data.filter((weapon) =>
            selection.some(
              (name) => name.toLowerCase() === weapon.name.toLowerCase()
            )
          );

          matches.forEach((weapon) => {
            if (!foundWeapons.some((w) => w.id === weapon.id)) {
              foundWeapons.push(weapon);
            }
          });

          if (foundWeapons.length >= selection.length) {
            break;
          }
        } catch (error) {
          console.log("Failed to fetch page:", page, error);
        }
      }
      setProducts(foundWeapons);
      setLoading(false);
    };

    fetchPagesUntilFound();
  }, []);

  return (
    <div className="product-list-container">
      {loading ? (
        <p style={{ color: "white" }}>Loading weapons...</p>
      ) : products.length > 0 ? (
        products.map((p) => <Product key={p.id} product={p} />)
      ) : (
        <p style={{ color: "white" }}>No weapons found.</p>
      )}
    </div>
  );
};

export default ProductList;
