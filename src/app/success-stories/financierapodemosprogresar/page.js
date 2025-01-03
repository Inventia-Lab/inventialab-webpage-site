import Brief from "../../../block-pages/SuccessStories/FinancieraPodemosProgresar/Brief";
import ContactUs from "../../../block-pages/SuccessStories/FinancieraPodemosProgresar/ContactUs";
import Cover from "../../../block-pages/SuccessStories/FinancieraPodemosProgresar/Cover";
import Main from "../../../block-pages/SuccessStories/FinancieraPodemosProgresar/Main";
import Results from "../../../block-pages/SuccessStories/FinancieraPodemosProgresar/Results";
import Success from "../../../block-pages/SuccessStories/FinancieraPodemosProgresar/Success";
import React, { useEffect } from "react";

export default function SuccessStoriesFinancieraPodemosProgresar() {

  useEffect(() => {
    document.title = "InventiaLab: Podemos Progresar";
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