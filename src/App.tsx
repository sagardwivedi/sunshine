import { About, HeroSection, Navbar } from "./components";

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <About />
    </div>
  );
}

export default App;
