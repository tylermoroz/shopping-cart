import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const ArmamentCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      loop={true}
      navigation
      autoplay={{ delay: 4000 }}
    >
      <SwiperSlide>
        <img
          src="/src/assets/devourers_scepter.webp"
          alt="Devourer's Scepter"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/bolt_of_gransax.webp" alt="Bolt of Gransax" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/src/assets/dark_moon_greatsword.webp"
          alt="Dark Moon Greatsword"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/eclipse_shotel.webp" alt="Eclipse Shotel" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/src/assets/golden_order_greatsword.webp"
          alt="Golden Order Greatsword"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/grafted_blade.webp" alt="Grafted Blade" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/src/assets/marais_executioners_sword.webp"
          alt="Marais Executioner's Sword"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/ruins_greatsword.webp" alt="Ruins Greatsword" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/src/assets/sword_of_night_and_flame.webp"
          alt="Sword of Night and Flame"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ArmamentCarousel;
