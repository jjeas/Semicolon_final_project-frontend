import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MainPage from "./pages/public/Mainpage";

function App() {
  return (
    <div>
      <Header />
      <main>
        <MainPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
