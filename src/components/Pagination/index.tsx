import Pagination from '@material-ui/lab/Pagination';
import { VFC } from 'react';

import useStyles from './style';

export type PaginationProps = {
  totalPage: number;
  currentPage: number;
  handleChange: (page: number) => void;
};

export const PaginationWrapper: VFC<PaginationProps> = ({
  totalPage,
  currentPage,
  handleChange,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.stack}>
      <Pagination
        count={totalPage}
        page={currentPage}
        onChange={(e, page) => handleChange(page)}
        className={styles.pagination}
      />
    </div>
  );
};
