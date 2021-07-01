import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import PromoSection from "./components/PromoSection";
import BoostBanner from "./components/BoostBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero />
    <SearchBar />
    <PromoSection />
    <BoostBanner />
    <Footer />
    </div>
  );
}

export default App;
