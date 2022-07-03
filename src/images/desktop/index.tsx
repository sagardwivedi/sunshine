type Props = {
  TransformImageW: string;
  StandOutImageW: string;
  PhotographyImageW: string;
  HeaderImageW: string;
  GraphicDesignImageW: string;
  GallerySugerCubeaImageW: string;
  GalleryOrangeImageW: string;
  GalleryMilkBottlesImageW: string;
  GalleryConeImageW: string;
};

const DesktopImage: Props = {
  TransformImageW: require("./image-transform.webp"),
  StandOutImageW: require("./image-stand-out.webp"),
  PhotographyImageW: require("./image-photography.webp"),
  HeaderImageW: require("./image-header.webp"),
  GraphicDesignImageW: require("./image-graphic-design.webp"),
  GallerySugerCubeaImageW: require("./image-gallery-sugarcubes.webp"),
  GalleryOrangeImageW: require("./image-gallery-orange.webp"),
  GalleryMilkBottlesImageW: require("./image-gallery-milkbottles.webp"),
  GalleryConeImageW: require("./image-gallery-cone.webp"),
};

export default DesktopImage;
