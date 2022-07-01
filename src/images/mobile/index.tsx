// import all the images from the src/images/desktop folder and export them

type Props = {
  TransformImage: string;
  StandOutImage: string;
  PhotographyImage: string;
  HeaderImage: string;
  GraphicDesignImage: string;
  GallerySugerCubeaImage: string;
  GalleryOrange: string;
  GalleryMilkBottles: string;
  GalleryCone: string;
};

const MobileImages: Props = {
  TransformImage: require("./image-transform.jpg"),
  StandOutImage: require("./image-stand-out.jpg"),
  PhotographyImage: require("./image-photography.jpg"),
  HeaderImage: require("./image-header.jpg"),
  GraphicDesignImage: require("./image-graphic-design.jpg"),
  GallerySugerCubeaImage: require("./image-gallery-sugarcubes.jpg"),
  GalleryOrange: require("./image-gallery-orange.jpg"),
  GalleryMilkBottles: require("./image-gallery-milkbottles.jpg"),
  GalleryCone: require("./image-gallery-cone.jpg"),
};

export default MobileImages;
