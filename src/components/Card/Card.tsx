import styles from "./Card.module.css";

interface Props {
  nombre: string;
  genero: string;
}
export const Card = ({ nombre, genero }: Props) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{nombre}</h3>
      <p className={styles.genero}>{genero}</p>
    </article>
  );
};
