import styles from './Grid.module.css';

const Grid = ({ children }) => (
  <div className={styles.Grid}>
    {children}
  </div>
);

export { Grid };
