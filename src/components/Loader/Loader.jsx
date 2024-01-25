import styles from './Loader.module.css';
import { Grid } from 'react-loader-spinner';

export const Loader = () => (
  <div className={styles['loader-container']}>
    <Grid
      visible={true}
      height="80"
      width="80"
      color="gray"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
      wrapperClass="grid-wrapper"
    />
  </div>
);
