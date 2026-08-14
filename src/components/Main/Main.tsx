import { Card } from "../Card/Card";
import style from "./Main.module.css";

interface Juego {
  nombre: string;
  genero: string;
}
interface Props {
  title: string;
  description: string;
  items: Juego[];
}
export const Main = ({ title, description, items }: Props) => {
  return (
    <main className={style.main}>
      <section className={style.container}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
        <div className={style.items}>
          {items.map((item) => (
            <Card key={item.nombre} nombre={item.nombre} genero={item.genero} />
          ))}
        </div>
      </section>
    </main>
  );
};
