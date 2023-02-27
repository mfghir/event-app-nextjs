import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ link, children, onClick }) => {
  if (link) {
    return (
      <Link href={link}>
        <span className={styles.btn}>{children}</span>
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
