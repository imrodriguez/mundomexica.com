import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Icon } from './styles';
import generalData from '../../config/generalData.json';

const SocialButtons = () => (
  <div>
    <Icon>
      <a href={generalData.instagram} rel="noreferrer" target='_blank'>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </Icon>
    <Icon>
      <a href={generalData.twitter} rel="noreferrer" target='_blank'>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </Icon>
    <Icon>
      <a href={generalData.facebook} rel="noreferrer" target='_blank'>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </Icon>
  </div>
);

export { SocialButtons };