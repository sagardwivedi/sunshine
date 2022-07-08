import { Icons } from "../images";
import DesktopImage from "../images/desktop";
import MobileImages from "../images/mobile";

const HeroSection = () => {
  return (
    <main className="relative">
      <img
        loading="lazy"
        className="mobileL:hidden"
        alt="A cut lemon with blue background"
        src={MobileImages.HeaderImageW}
        width="100%"
        height="100%"
      />
      <img
        loading="eager"
        className="hidden sm:block"
        alt="A cut lemon with blue background"
        src={DesktopImage.HeaderImageW}
        width="100%"
        height="100%"
      />
      <div className="absolute top-[40%] left-[23%] flex flex-auto flex-col items-center justify-center space-y-24 text-center font-[Fraunces] text-4xl font-black tracking-widest text-white sm:space-y-20 mobileL:text-5xl tablet:text-7xl">
        <h1 className="sm:-mt-36">WE ARE CREATIVES</h1>
        <img src={Icons.ArrowDownIcon} alt="ArrowDown" />
      </div>
    </main>
  );
};

export default HeroSection;
