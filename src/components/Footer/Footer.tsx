import styles from "./Footer.module.css";

interface Props {
  text: string;
  anio: number;
}

export const Footer = ({ text, anio }: Props) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        &copy; {anio} GameZone - {text}
      </p>
    </footer>
  );
};
