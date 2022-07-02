import { About, HeroSection, Navbar, Testonomial } from "./components";

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <About />
      <Testonomial />
    </div>
  );
}

export default App;
