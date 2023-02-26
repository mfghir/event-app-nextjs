import Link from "next/link";
import styles from "./EventItem.module.css";

const EventItem = ({ item }) => {
  const { id, title, date, location, image } = item;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

    const formattedAddress = location.replace(", " , "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={"/" + image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
            {/* <address>{location}</address> */}
          </div>
        </div>

        <div className={styles.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
