import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const IntroVideo = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="w-full flex justify-center items-center -mt-12"
    >
      <video className="w-[95%]" autoPlay loop muted>
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default IntroVideo;
