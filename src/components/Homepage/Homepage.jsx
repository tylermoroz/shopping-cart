import ArmamentCarousel from "./ArmamentCarousel";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="homepage-container">
        <h1>Welcome Tarnished</h1>
        <p className="hero-description">
          You have found your way to the Merchants of Marika. Here lie relics of
          power, forged in crimson flame and golden grace...
        </p>
        <p className="browsing-description">
          Browse our wares before your journey into The Lands Between.
        </p>
        <div className="legendary-carousel">
          <ArmamentCarousel />
        </div>
        <p className="carousel-description">
          BEAR WITNESS! These Legendary armaments of The Lands Between were once
          wielded by warriors of great renown.
        </p>
      </div>
    </>
  );
};

export default Homepage;
