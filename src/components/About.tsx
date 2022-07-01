import { Link } from "react-router-dom";
import DesktopImage from "../images/desktop";

const About = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <Link to="/">LEARN MORE</Link>
      </div>

      <img
        className="w-full"
        src={DesktopImage.TransformImage}
        alt="A egg with a yellow background"
      />

      <img
        className="w-full"
        src={DesktopImage.StandOutImage}
        alt="A vase with a soft red background"
      />

      <div>
        <h2>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we&#39;ll build and
          extend your brand in digital places.
        </p>
        <Link to="/">Learn More</Link>
      </div>

      <div className="relative">
        <img
          className="w-full"
          src={DesktopImage.GraphicDesignImage}
          alt="A red cherry with a backgroundImage"
        />
        <div className="absolute top-[70%] text-center">
          <h3>Graphic design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients&#39;
            attention.
          </p>
        </div>
      </div>

      <div className="relative">
        <img
          className="w-full"
          src={DesktopImage.PhotographyImage}
          alt="A orange fruit with blue background"
        />
        <div className="absolute top-[70%] text-center">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
