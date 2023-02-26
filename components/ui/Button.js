import Link from "next/link";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <Link href={props.link}>
      <span className={styles.btn}>{props.children}</span>
    </Link>
  );
};

export default Button;
