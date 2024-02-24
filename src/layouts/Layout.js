import { Fragment, useEffect, useState } from "react";
import niceSelect from "react-nice-select";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ header, children, footer }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    niceSelect();
    animation();
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      <Header header={header} />
      <VideoPopup />
      <ImageView />
      {children}
      <Footer footer={footer} />
      {showTopBtn && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "green",
            color: "white",
            cursor: "pointer",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            zIndex: 1000,
          }}
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </Fragment>
  );
};

export default Layout;
