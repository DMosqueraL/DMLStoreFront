import styles from "./NoResults.module.scss";

export default function NoResults(props) {
  const { text } = props;

  return (
    <div className={styles.noResults}>
      <p>{text}</p>
    </div>
  );
}
