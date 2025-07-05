import IMarvel from "../assets/images/marvel.png";
import INarionalG from "../assets/images/nationalG.png";
import IPixar from "../assets/images/pixar.png";
import IStarwar from "../assets/images/starwar.png";
import IDisney from "../assets/images/disney.png";

import VStarwar from "../assets/Videos/star-wars.mp4";
import VDisney from "../assets/Videos/disney.mp4";
import VNationalGeographic from "../assets/Videos/national-geographic.mp4";
import VPixar from "../assets/Videos/pixar.mp4";
import VMarvel from "../assets/Videos/marvel.mp4";

 const ImagesAndVideos = [
  {
    id: 1,
    image: IMarvel,
    title: "Marvel",
    video: VMarvel,
  },
  {
    id: 2,
    image: INarionalG,
    title: "National Geographic",
    video: VNationalGeographic,
  },
  {
    id: 3,
    image: IPixar,
    title: "Pixar",
    video: VPixar,
  },
  {
    id: 4,
    image: IStarwar,
    title: "Star Wars",
    video: VStarwar,
  },
  {
    id: 5,
    image: IDisney,
    title: "Disney",
    video: VDisney,
  },
];

export default ImagesAndVideos;