import { About, Footer, HeroSection, Navbar, Testonomial } from "./components";

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <About />
      <Testonomial />
      <Footer />
    </div>
  );
}

export default App;
