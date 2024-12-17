import "../styles/globals/globals.css";
import "../styles/globals/fonts.css";
import "../styles/globals/themes.css";
import { ThemeProvider } from '../context/wrappers/ThemeSwitcher';
import { ContextProvider } from "../context/wrappers/ContextProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RootLayout({ children }) {

  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </head>
      <body>
          <ContextProvider>
            <ThemeProvider>
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </ContextProvider>
      </body>
    </html>
  );
}
