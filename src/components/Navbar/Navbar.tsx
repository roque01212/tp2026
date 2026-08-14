import styles from "./Navbar.module.css";

interface Props {
  title: string;
  links: string[];
}
export const Navbar = ({ title, links }: Props) => {
  return (
    <div className={styles.navbar}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link} className={styles.link}>
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};
