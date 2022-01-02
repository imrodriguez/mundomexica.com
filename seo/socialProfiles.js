import { SocialProfileJsonLd } from 'next-seo';
import generalData from '../config/generalData.json';
import { DOMAIN } from "../config/routes";

const SocialProfiles = () => (
  <SocialProfileJsonLd
    type="Organization"
    name={generalData.name}
    url={DOMAIN}
    sameAs={[
        generalData.twitter,
        generalData.instagram,
        generalData.facebook,
      ]}
  />
);

export { SocialProfiles };