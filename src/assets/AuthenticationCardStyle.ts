import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {
    width: '95%',
    padding: '1.5rem',
    margin: '2rem auto',
    '@media (min-width: 768px)': {
      width: '50%',
      padding: '3rem',
    },
    '@media (min-width: 1280px)': {
      width: '30%',
    },
  },
  logo: {
    width: '10rem',
  },
  div: {
    marginBottom: '2rem',
  },
  label: {
    display: 'block',
  },
});
