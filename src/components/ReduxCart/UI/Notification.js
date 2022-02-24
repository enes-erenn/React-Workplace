// Styles
import styles from "./Notification.module.css";

const Notification = (props) => {
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = styles.error;
  }
  if (props.status === "success") {
    specialClasses = styles.success;
  }

  const cssClasses = `${styles.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2 className={styles.header}>{props.title}</h2>
      <p className={styles.message}>{props.message}</p>
    </section>
  );
};

export default Notification;
