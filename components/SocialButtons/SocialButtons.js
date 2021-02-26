import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from './SocialButtons.module.css';
import generalData from '../../config/generalData.json';

const SocialButtons = () => (
  <div>
    <div className={styles.Icon}>
      <a href={generalData.instagram} rel="noreferrer" target='_blank'>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
    <div className={styles.Icon}>
      <a href={generalData.twitter} rel="noreferrer" target='_blank'>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
    <div className={styles.Icon}>
      <a href={generalData.facebook} rel="noreferrer" target='_blank'>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
  </div>
);

export { SocialButtons };