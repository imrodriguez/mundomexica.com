import styles from './Title.module.css';
import { SocialButtons } from '../SocialButtons';

const Title = ({ title, description }) => (
  <div className={styles.Wrapper}>
    <h1>
      <span className={styles.Name}>{title}</span>
      <img 
      className={styles.Separator} 
      src="/separador.png" 
      alt="separador"
      width="304"
      height="5.38"/>
      <span className={styles.Surname}>{description}</span>
    </h1>
    <SocialButtons />
  </div>
);

export { Title };

