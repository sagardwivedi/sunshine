import { Icons } from "../images";

const HeroSection = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center  space-y-24 bg-heroMobile bg-cover bg-center bg-no-repeat text-center font-[Fraunces] text-5xl font-black tracking-widest text-white sm:space-y-16 sm:bg-heroDesktop sm:text-8xl">
      <h1 className="sm:-mt-36">WE ARE CREATIVES</h1>
      <img src={Icons.ArrowDownIcon} alt="ArrowDown" />
    </main>
  );
};

export default HeroSection;
