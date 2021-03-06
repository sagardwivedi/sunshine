import { Link } from "react-router-dom";
import DesktopImage from "../images/desktop";
import MobileImages from "../images/mobile";

const About = () => {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2">
      <img
        loading="lazy"
        className="mobileL:hidden"
        src={MobileImages.TransformImageW}
        alt="An white egg with yello backgeounf"
        width="100%"
        height="100%"
      />

      <div className="about-info">
        <h2 className="font-[Fraunces] text-4xl font-black text-dark-de-blue">
          Transform your brand
        </h2>
        <p className="my-8 font-[Barlow] text-grayish-blue-100">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <Link className="about-link" to="/">
          LEARN MORE
        </Link>
      </div>

      <img
        loading="lazy"
        className="hidden w-full mobileL:block"
        src={DesktopImage.TransformImageW}
        alt="A egg with a yellow background"
      />

      <img
        loading="lazy"
        className="hidden w-full sm:block"
        src={DesktopImage.StandOutImageW}
        alt="A vase with a soft red background"
      />

      <img
        loading="lazy"
        className="sm:hidden"
        src={MobileImages.StandOutImageW}
        alt="A vase with a soft red background"
      />

      <div className="about-info">
        <h2 className="font-[Fraunces] text-4xl font-black text-dark-de-blue">
          Stand out to the right audience
        </h2>
        <p className="my-8 font-[Barlow] text-grayish-blue-100">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we&#39;ll build and
          extend your brand in digital places.
        </p>
        <Link className="about-link after:bg-soft-red/20" to="/">
          LEARN MORE
        </Link>
      </div>

      <div className="relative">
        {/* Mobile */}
        <img
          loading="lazy"
          className="sm:hidden"
          src={MobileImages.GraphicDesignImageW}
          alt="A red cherry with a backgroundImage"
        />

        {/* Desktop */}
        <img
          loading="lazy"
          className="hidden w-full sm:block"
          src={DesktopImage.GraphicDesignImageW}
          alt="A red cherry with a backgroundImage"
        />

        {/* Text */}
        <article className="image-info text-dark-de-cyan-graphic-text ">
          <h3 className="image-info-h3">Graphic design</h3>
          <p className="image-info-p">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients&#39;
            attention.
          </p>
        </article>
      </div>

      <div className="relative">
        {/* Mobile */}
        <img
          loading="lazy"
          className="sm:hidden"
          src={MobileImages.PhotographyImageW}
          alt="A orange fruit with blue background"
        />

        {/* Desktop */}
        <img
          loading="lazy"
          className="hidden w-full sm:block"
          src={DesktopImage.PhotographyImageW}
          alt="A orange fruit with blue background"
        />

        {/* Text */}
        <article className="image-info text-dark-de-cyan-graphic-text">
          <h3 className="image-info-h3">Photography</h3>
          <p className="image-info-p">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;
