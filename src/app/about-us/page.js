import Experience from "../../block-pages/AboutUs/Experience";
import JoinTeamForm from "../../block-pages/AboutUs/JoinTeam";
import Main from "../../block-pages/AboutUs/Main";
import OurTeam from "../../block-pages/AboutUs/OurTeam";
import Software from "../../block-pages/AboutUs/Software";
import React, { useEffect } from "react";

export default function AboutUs() {

  useEffect(() => {
    document.title = "Hablemos";
  }, []);

  return (
    <>
      <main>
          <Main />
          <OurTeam />
          <Experience />
          <Software />
          <JoinTeamForm />
      </main>
    </>
  );
}