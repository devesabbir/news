import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import HomePage from "./pages/HomePage";
import { CategoryProvider, NewsProvider, SearchProvider } from "./providers";

function App() {
  return (
    <SearchProvider>
      <CategoryProvider>
        <NewsProvider>
          <Navbar />
          <HomePage />
          <Footer />
        </NewsProvider>
      </CategoryProvider>
    </SearchProvider>
  );
}

export default App;
