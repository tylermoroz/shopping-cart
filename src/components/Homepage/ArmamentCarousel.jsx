import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import devourersscepter from "../../assets/devourers_scepter.webp";
import boltofgransax from "../../assets/bolt_of_gransax.webp";
import darkmoongreatsword from "../../assets/dark_moon_greatsword.webp";
import eclipseshotel from "../../assets/eclipse_shotel.webp";
import goldenordergreatsword from "../../assets/golden_order_greatsword.webp";
import graftedblade from "../../assets/grafted_blade.webp";
import maraisexecutionerssword from "../../assets/marais_executioners_sword.webp";
import ruinsgreatsword from "../../assets/ruins_greatsword.webp";
import swordofnightandflame from "../../assets/sword_of_night_and_flame.webp";

const ArmamentCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      loop={true}
      navigation
      autoplay={{ delay: 4000 }}
    >
      <SwiperSlide>
        <h1>Devourer's Scepter</h1>
        <img src={devourersscepter} alt="Devourer's Scepter" />
      </SwiperSlide>
      <SwiperSlide>
        <h1>Bolt of Gransax</h1>
        <img src={boltofgransax} alt="Bolt of Gransax" />
      </SwiperSlide>
      <SwiperSlide>
        <h1>Dark Moon Greatsword</h1>
        <img src={darkmoongreatsword} alt="Dark Moon Greatsword" />
      </SwiperSlide>
      <SwiperSlide>
        <h1>Eclipse Shotel</h1>
        <img src={eclipseshotel} alt="Eclipse Shotel" />
      </SwiperSlide>
      <SwiperSlide>
        <h1>Golden Order Greatsword</h1>
        <img src={goldenordergreatsword} alt="Golden Order Greatsword" />
      </SwiperSlide>
      <SwiperSlide>
        <h1>Grafted Blade Greatsword</h1>
        <img src={graftedblade} alt="Grafted Blade" />
      </SwiperSlide>
      <SwiperSlide>
        <h1>Marais Executioner's Sword</h1>
        <img src={maraisexecutionerssword} alt="Marais Executioner's Sword" />
      </SwiperSlide>
      <SwiperSlide>
        <h1>Ruins Greatsword</h1>
        <img src={ruinsgreatsword} alt="Ruins Greatsword" />
      </SwiperSlide>
      <SwiperSlide>
        <h1>Sword of Night and Flame</h1>
        <img src={swordofnightandflame} alt="Sword of Night and Flame" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ArmamentCarousel;
