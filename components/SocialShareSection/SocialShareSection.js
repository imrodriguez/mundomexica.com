import {
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";
import styles from './SocialShareSection.module.css';

const SocialShareSection = ({ url }) => (
  <div className={styles.SocialWrapper}>
    <FacebookShareButton url={url}>
      <FacebookIcon size={32} />
    </FacebookShareButton>
    <LinkedinShareButton url={url}>
      <LinkedinIcon size={32} />
    </LinkedinShareButton>
    <TelegramShareButton url={url}>
      <TelegramIcon size={32} />
    </TelegramShareButton>
    <TwitterShareButton url={url}>
      <TwitterIcon size={32} />
    </TwitterShareButton>
    <WhatsappShareButton url={url}>
      <WhatsappIcon size={32} />
    </WhatsappShareButton>
  </div>
);

export { SocialShareSection };