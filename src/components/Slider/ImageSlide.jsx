import Carousel from "./Carousel";
import clime1 from "../assets/clime1.png";
import clime2 from  "../assets/clime2.png";
import clime3 from  "../assets/clime3.jpg";

export default function ImageSlide() {
  const slides = [clime1, clime2, clime3];

  return (
    <div className="">
      <div className="max-w-full">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}