import { Image } from '../Image';
import { BannerWrapper } from './styles';

const Banner = ({image}) => (
    <BannerWrapper>
        <Image image={image}/>
    </BannerWrapper>
);

export { Banner };