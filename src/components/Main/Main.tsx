import style from "./Main.module.css";

interface Props {
  title: string;
  description: string;
  items: string[];
}
export const Main = ({ title, description, items }: Props) => {
  return (
    <main className={style.main}>
      <section className={style.container}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
        <div className={style.items}>
          {items.map((item) => (
            <div key={item} className={style.card}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
