import { SocialProfileJsonLd } from 'next-seo';
import generalData from '../config/generalData.json';

const SocialProfiles = () => (
    <SocialProfileJsonLd
      type="Organization"
      name={generalData.name}
      url="http://mundomexica.com"
      sameAs={[
        generalData.twitter,
        generalData.instagram,
        generalData.facebook,
      ]}
    />
);

export { SocialProfiles };