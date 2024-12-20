// import Carousel from "../../block-pages/SuccessStories/Primary/Carousel";
import ContactUs from "../../block-pages/SuccessStories/Primary/ContactUs";
import Description from "../../block-pages/SuccessStories/Primary/Description";
import Main from "../../block-pages/SuccessStories/Primary/Main";
import Options from "../../block-pages/SuccessStories/Primary/Options";
import Projects from "../../block-pages/SuccessStories/Primary/Projects";
import React, { useEffect } from "react";

export default function SuccessStories() {

  useEffect(() => {
    document.title = "Casos de éxito";
  }, []);

  return (
    <>
      <main>
        <Main />
        <Projects />
        <Options />
        <Description />
        {/* <Carousel /> */}
        <ContactUs />
      </main>
    </>
  );
}