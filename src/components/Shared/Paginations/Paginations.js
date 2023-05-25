import { Pagination as PagesSUI } from "semantic-ui-react";
import { useRouter } from "next/router";
import styles from "./Paginations.module.scss";

export function Paginations(props) {
  const { currentPage, totalPages } = props;

  const router = useRouter();

  const onPageChange = (_, data) => {
    const { activePage } = data;

    router.replace({ query: { ...router.query, page: activePage } });
  };

  return (
    <div className={styles.container}>
      <PagesSUI
        defaultActivePage={currentPage}
        totalPages={totalPages}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        onPageChange={onPageChange}
      />
    </div>
  );
}
