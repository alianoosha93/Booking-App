import "./Hotel.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import hotel1 from "../../assets/apartment.jpg";

const Hotel = () => {
  const dispatch = useDispatch();
  const position = useSelector((state) => state);

  const [sliderNo, setSliderNo] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSliderNo(i);
    setOpen(true);
  };

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/13257826.webp?k=8f7f5b7fd791cc3ff302dddf4476553e0173d8d416e232e647dfaab8c92ec034&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/363695523.webp?k=6c774d988ffe47b744cf266d00dcf7cab011b329d8ff93cfd1fbb29535036f5a&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/535513667.webp?k=6ff4ddc832b397caf74eb1e404f1c4b866f8566bc271518897f1a8e07a98ab8e&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/144318904.jpg?k=27cd434d66d0310216df41c3922566efe43aedb214c90bf57045edf423aeb5c6&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/632610483.webp?k=216b94b19f587f6c132246faa536336175ed5a5d9fb96aa2639c9c2dc74c4690&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleMove = (direction) => {
    let newSliderNo;

    if (direction === "l") {
      newSliderNo = sliderNo === 0 ? 5 : sliderNo - 1;
    } else {
      newSliderNo = sliderNo === 5 ? 0 : sliderNo + 1;
    }

    setSliderNo(newSliderNo);
  };

  return (
    <div>
      <Navbar />
      <Header type="List" />

      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[sliderNo].src} className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}

        <div className="hotelWrapper">
          <button
            onClick={(e) => dispatch({ type: "BOOKED" })}
            className="bookNow"
          >
            Reserve or Book Now!
          </button>
          <h3 className="booking">{position}</h3>
          <h1 className="hotelTitle">Tower Street Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>

          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  src={photo.src}
                  className="hotelImg"
                  onClick={() => {
                    handleOpen(i);
                  }}
                />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>

            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                {" "}
                <b>$945</b> (9 nights){" "}
              </h2>
              <button onClick={(e) => dispatch({ type: "BOOKED" })}>
                Reserve or Book Now!
              </button>
            </div>
          </div>
        </div>

        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
