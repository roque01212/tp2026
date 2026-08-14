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
    {
      nombre: "The Legend of Zelda",
      genero: "Aventura",
    },
    {
      nombre: "Red Dead Redemption 2",
      genero: "Acción y aventura",
    },
    {
      nombre: "God of War",
      genero: "Acción",
    },
    {
      nombre: "The Witcher 3: Wild Hunt",
      genero: "RPG",
    },
    {
      nombre: "Minecraft",
      genero: "Sandbox",
    },
  ];

  return (
    <div className="app">
      <Navbar title={titleNav} links={links} />
      <Main title={titleMain} description={descriptionMain} items={itemsMain} />
      <Footer text="Todos los derechos reservados" anio={2026} />
    </div>
  );
}

export default App;
