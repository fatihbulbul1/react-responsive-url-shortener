import Footer from "./components/Footer.js";
import FooterNav from "./components/FooterNav.js";
import GraphSection from "./components/GraphSection.js";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <GraphSection />
      <Footer />
      <FooterNav />
    </div>
  );
}

export default App;
