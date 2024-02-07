import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import HomeSlider from "../Components/HomeSlider";
let slideMax;
export default function Home() {
  const slides = document.querySelectorAll('.slide');
  // const maxSlide = slides.length -1 ;
  const [maxSlide, setMaxSlide] = useState(3)
  slideMax = maxSlide;
  const [curSlide, setCurSlide] = useState(0);
  useEffect(() => {
    // Apply the initial transformation when the component loads
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
    });
  }, [])
  useEffect(() => {
    // Define a function to set the translateX property for each slide
    ;
    const setSlideTransform = () => {
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
      });
    };

    // Call the function when the component mounts and whenever curSlide changes
    setSlideTransform();

    // Optionally, you can add an event listener to reapply the transformation when the window is resized
    const handleResize = () => {
      setSlideTransform();
    };
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [curSlide, slides]); // This code runs when curSlide or slides change.


  const handleNextSlide = () => {
    // Check if the current slide is the last and reset the current slide
    if (curSlide === maxSlide) {
      setCurSlide(0);
    } else {
      setCurSlide(curSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    // Check if the current slide is the first and reset the current slide to the last
    if (curSlide === 0) {
      setCurSlide(maxSlide);
    } else {
      setCurSlide(curSlide - 1);
    }
  };
  // console.log(curSlide,maxSlide);
  return (
    <>
      <Navbar />
      <main className="home-main">
        <section className="first-hero">
          <div>
            <h1>Welcome to Zenith English School</h1>
            <p>where we nurture minds and shape futures. Our mission is to provide a holistic education that fosters academic excellence and personal growth.</p>
            <button></button>
          </div>
          <div>
            <h1>Welcome to Zenith English School</h1>
            <p>where we nurture minds and shape futures. Our mission is to provide a holistic education that fosters academic excellence and personal growth.</p>
            <button></button>
          </div>
        </section>

        {/* <h3>Welcome to Zenith English School</h3>
        <p>Zenith English School is a multicultural community in the foothills of the Himalayas that inspires in each student a passion for learning, the confidence and competence to pursue their dreams, and the commitment to serve as a compassionate global citizen and leader, who is a steward of the environment.</p>
        <p>Please also see the 2022-2023 Zenith English School Calendar.</p>
        <img src="/Images/Homepage-Others/Zenith Intro.jpg" />

        <h3>Our Schools</h3>
        <p>Zenith High School offers an American curriculum with an international perspective. The program is college preparatory with a wide selection of electives and extracurricular activities leading to an American high school diploma.</p>
        <p>Elementary, Middle, High</p>
        <video width="640" height="360" controls>
          <source
            src="/Videos/School_Introduction.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}
      </main>

    </>
  );
}
