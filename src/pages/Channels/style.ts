import { makeStyles } from '@material-ui/core';

export default makeStyles({
  subscCard: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '0 0 1rem 0',
    padding: '1rem',
    '@media (min-width: 768px)': {
      flexWrap: 'nowrap',
      alignItems: 'center',
    },
  },
  subscHeader: {
    width: '80%',
    textAlign: 'center',
    margin: '0 0 1rem 0',
    '@media (min-width: 768px)': {
      width: '60%',
      margin: '0 1rem 1rem 0',
    },
  },
  subscName: {
    width: '85%',
    margin: '0 auto',
    '@media (min-width: 768px)': {
      width: '50%',
    },
  },
});
