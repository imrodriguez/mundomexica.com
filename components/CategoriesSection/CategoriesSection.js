import { v4 as uuidv4 } from 'uuid';
import { Grid, Element } from './styles';
import { Image } from '../Image';

const CategoriesSection = ({ categories }) => (
  <Grid>
    {categories.map(cat => (
      <div key={uuidv4()}>
        <a href={`/categoria/${cat.fields.url}`}>
        <Element>
          <Image image={cat.fields.image} />
          <p>{cat.fields.name}</p>
        </Element>
        </a>
      </div>
))}
  </Grid >
);

export { CategoriesSection };