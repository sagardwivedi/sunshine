import { lazy, Suspense } from "react";
import { Navbar, HeroSection } from "./components";

const About = lazy(() => import("./components/About"));
const Testonomial = lazy(() => import("./components/Testonomial"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <Suspense>
        <About />
        <Testonomial />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
