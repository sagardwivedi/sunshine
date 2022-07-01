import ArrowDownIcon from "./icon-arrow-down.svg";
import FacebookIcon from "./icon-facebook.svg";
import HamburgerIcon from "./icon-hamburger.svg";
import InstagramIcon from "./icon-instagram.svg";
import PinterestIcon from "./icon-pinterest.svg";
import TwitterIcon from "./icon-twitter.svg";
import CompanyIcon from "./logo.svg";

type IconProps = {
  ArrowDownIcon: string;
  FacebookIcon: string;
  HamburgerIcon: string;
  InstagramIcon: string;
  PinterestIcon: string;
  TwitterIcon: string;
  CompanyIcon: string;
};

export const Icons: IconProps = {
  ArrowDownIcon,
  FacebookIcon,
  HamburgerIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
  CompanyIcon,
};

type ImageProps = {
  EmilyImage: string;
  JennieImage: string;
  ThomasImage: string;
};

export const Images: ImageProps = {
  EmilyImage: require("./image-emily.jpg"),
  JennieImage: require("./image-jennie.jpg"),
  ThomasImage: require("./image-thomas.jpg"),
};
