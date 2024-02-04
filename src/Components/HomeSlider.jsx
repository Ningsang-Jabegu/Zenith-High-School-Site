import React, { useEffect, useState } from "react";
// import Navbar from "../Components/Navbar";
let slideMax;
export default function HomeSlider() {
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

    const imageUrls = [
        "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/392885347_666263548818813_3378082538246200802_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=koRDGHipifEAX_Z9Oqn&_nc_ht=scontent.fktm8-1.fna&oh=00_AfAA__noH4_DTDmwxYp409AdJNRdmpmeaOpQlwbv_pvvRg&oe=65355486",
        "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/391660681_666263562152145_6794269281314685577_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S7DaCUoXI0QAX-kmp_K&_nc_ht=scontent.fktm8-1.fna&oh=00_AfApmyCrcAp_frVO2YdFpV2h7tQKX1XYOYjWX-nXuUMYwA&oe=653653A8",
        "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/392926031_666263515485483_7126418083377274989_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Bmx0wdaynN0AX8lHOnY&_nc_ht=scontent.fktm8-1.fna&oh=00_AfDxgr78tibCH6aSb3hm0zBTSOcYSXMmzC-xjwR2EP5rDg&oe=65351268",
        "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/391553383_663934472385054_4289895321006915415_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=emUJiEb1NukAX_6zI_I&_nc_ht=scontent.fktm8-1.fna&oh=00_AfDh9kvrokyxE-KqZin6MWEn4BlBKcruLUzN9XU9vF1W8w&oe=6536DA8C",
    ];
    const sliderInfo = [
        {
            imgUrl: "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/393609635_668384155273419_21225564307567485_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=x-OaE8PZjuIAX-dZsUP&_nc_ht=scontent.fktm8-1.fna&oh=00_AfBQXkF32LDJTUnMwqmyIp3PO_k10jQ4voeXSNtf4hP01Q&oe=65383744",
            imgDescription: "Happy Birthday Aakarshan Adhikari from Class UKG. May god bless you!"
        },
        {
            imgUrl: "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/391660681_666263562152145_6794269281314685577_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S7DaCUoXI0QAX-kmp_K&_nc_ht=scontent.fktm8-1.fna&oh=00_AfApmyCrcAp_frVO2YdFpV2h7tQKX1XYOYjWX-nXuUMYwA&oe=653653A8",
            imgDescription: "Happy Birthday Aakarshan Adhikari from Class UKG. May god bless you!"
        },
        {
            imgUrl: "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/392926031_666263515485483_7126418083377274989_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Bmx0wdaynN0AX8lHOnY&_nc_ht=scontent.fktm8-1.fna&oh=00_AfDxgr78tibCH6aSb3hm0zBTSOcYSXMmzC-xjwR2EP5rDg&oe=65351268",
            imgDescription: "Happy Birthday Aakarshan Adhikari from Class UKG. May god bless you!"
        },
        {
            imgUrl: "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/391553383_663934472385054_4289895321006915415_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=emUJiEb1NukAX_6zI_I&_nc_ht=scontent.fktm8-1.fna&oh=00_AfDh9kvrokyxE-KqZin6MWEn4BlBKcruLUzN9XU9vF1W8w&oe=6536DA8C",
            imgDescription: "Happy Birthday Aakarshan Adhikari from Class UKG. May god bless you!"
        }
    ];
    return (
        <section className="slider shadow-soft border-light rounded border">
            {sliderInfo.map((slide, index) => (
            <div
              className="slide"
              style={{ transform: `translateX(${index * 100}%)` }}
              key={index}
            >
              <figure>
                <img src={slide.imgUrl} alt={`img${index + 1}`} />
                <figcaption className="slider-description">
                  {slide.imgDescription}
                </figcaption>
              </figure>
            </div>
          ))}
            {/* <!-- Control buttons --> */}
            <button className="button button-prev" onClick={handlePrevSlide}><i className="fa-solid fa-angle-left"></i></button>
            <button className="button button-next" onClick={handleNextSlide}><i className="fa-solid fa-angle-right"></i></button>
        </section>
    );
}
