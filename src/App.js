import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import PromoSection from "./components/PromoSection";
import BoostBanner from "./components/BoostBanner";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero />
    <SearchBar />
    <PromoSection />
    <BoostBanner />
    </div>
  );
}

export default App;
