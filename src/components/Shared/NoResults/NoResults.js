import styles from "./NoResults.module.scss";

export function NoResults(props) {
  const { text } = props;

  return (
    <div className={styles.noResults}>
      <p>{text}</p>
    </div>
  );
}
