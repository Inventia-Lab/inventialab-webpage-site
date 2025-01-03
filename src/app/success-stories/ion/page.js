import Brief from "../../../block-pages/SuccessStories/Ion/Brief";
import ContactUs from "../../../block-pages/SuccessStories/Ion/ContactUs";
import Cover from "../../../block-pages/SuccessStories/Ion/Cover";
import Main from "../../../block-pages/SuccessStories/Ion/Main";
import Results from "../../../block-pages/SuccessStories/Ion/Results";
import Success from "../../../block-pages/SuccessStories/Ion/Success";
import React, { useEffect } from "react";

export default function SuccessStoriesION() {

  useEffect(() => {
    document.title = "InventiaLab: ION";
  }, []);

  return (
    <>
      <main>
        <Main />
        <Cover />
        <Brief />
        <Results />
        <ContactUs />
        <Success />
      </main>
    </>
  );
}