import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import useFavorites from "./hooks/useFavorites";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";
import CountryPage from "./pages/CountryPage";
import styles from "./App.module.css";

const App = () => {
  const { favorites } = useFavorites();

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header favoritesCount={favorites.length} />
        <main className={styles.appMain}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pais/:cca3" element={<CountryPage />} />
            <Route path="/favoritos" element={<FavoritesPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
