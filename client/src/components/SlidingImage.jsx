import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import rollingDisplayPic1 from "../images/rollingDisplayPic1.jpeg";
import rollingDisplayPic2 from "../images/rollingDisplayPic2.JPG";
import rollingDisplayPic3 from "../images/rollingDisplayPic3.JPG";
import rollingDisplayPic5 from "../images/rollingDisplayPic5.JPG";
import rollingDisplayPic7 from "../images/rollingDisplayPic7.JPG";
import rollingDisplayPic8 from "../images/rollingDisplayPic8.JPG";
import rollingDisplayPic9 from "../images/rollingDisplayPic9.JPEG";
import rollingDisplayPic10 from "../images/rollingDisplayPic10.JPEG";
import rollingDisplayPic11 from "../images/rollingDisplayPic11.JPEG";
import rollingDisplayPic12 from "../images/rollingDisplayPic12.JPEG";
import rollingDisplayPic4 from "../images/rollingDisplayPic4.JPG";
import rollingDisplayPic13 from "../images/rollingDisplayPic13.jpeg";


function SlidingImage() {
  return (
    <div className="slidingImages">
      <Carousel
      width="10">
        <div>
          <img
            src={rollingDisplayPic1}
            alt="pic1"
          />
          <p className="legend"></p>
        </div>
        <div>
          <img
            src={rollingDisplayPic2}
            alt="pic2"
          />
          <p className="legend"></p>
        </div>
        <div>
          <img
            src={rollingDisplayPic3}
            alt="pic3"
          />
          <p className="legend"></p>
        </div>
        <div>
          <img
            src={rollingDisplayPic7}
            alt="pic6"
          />
          <p className="legend"></p>
        </div>
        <div>
          <img
            src={rollingDisplayPic5}
            alt="pic7"
          />
          <p className="legend"></p>
        </div>
        <div>
          <img
            src={rollingDisplayPic8}
            alt="pic4"
          />
          <p className="legend"></p>
        </div>
        <div>
          <img
            src={rollingDisplayPic9}
            alt="pic9"
          />
          <p className="legend"></p>
        </div>
        <div>
          <img
            src={rollingDisplayPic10}
            alt="pic10"
          />
          <p className="legend"></p>
        </div>
        <div>
          <img
            src={rollingDisplayPic11}
            alt="pic11"
          />
          <p className="legend"></p>
        </div>
        <div>
          <img
            src={rollingDisplayPic12}
            alt="pic12"
          />
          <p className="legend"></p>
        </div>
        <div>
          <img
            src={rollingDisplayPic4}
            alt="pic4"
          />
          <p className="legend"></p>
        </div>
        <div>
          <img
            src={rollingDisplayPic13}
            alt="pic13"
          />
          <p className="legend"></p>
        </div>
      </Carousel>
    </div>
  );
}

export default SlidingImage;
