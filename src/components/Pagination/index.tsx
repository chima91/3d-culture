import Pagination from '@material-ui/lab/Pagination'
import useStyles from './style'

export type PaginationProps = {
  totalPage: number;
  currentPage: number;
  handleChange: (page: number) => void;
}

export const PaginationWrapper = ({ totalPage, currentPage, handleChange }: PaginationProps) => {
  const styles = useStyles();

  return (
    <div className={styles.stack}>
      <Pagination count={totalPage} page={currentPage} onChange={(e, page) => handleChange(page)} className={styles.pagination} />
    </div>
  );
}