import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const titleNav = "GameZone";
  const links = ["Home", "About", "Contact"];

  const titleMain = "Videojuegos destacados";
  const descriptionMain =
    "Descubrí algunos de los videojuegos más populares y disfrutá diferentes aventuras";
  const itemsMain = [
    "The Legend of Zelda: Breath of the Wild",
    "Super Mario Odyssey",
    "Red Dead Redemption 2",
    "The Witcher 3: Wild Hunt",
    "God of War",
  ];

  return (
    <>
      <Navbar title={titleNav} links={links} />
      <Main title={titleMain} description={descriptionMain} items={itemsMain} />
      <Footer text="Todos los derechos reservados" anio={2026} />
    </>
  );
}

export default App;
