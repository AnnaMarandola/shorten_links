import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import PromoSection from "./components/PromoSection";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero />
    <SearchBar />
    <PromoSection />
    </div>
  );
}

export default App;
