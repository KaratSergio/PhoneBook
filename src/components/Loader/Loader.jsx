import styles from './Loader.module.css';
import { DNA } from 'react-loader-spinner';

export const Loader = () => (
  <div className={styles['loader-container']}>
    <DNA
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </div>
);
