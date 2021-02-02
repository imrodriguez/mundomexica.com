import { Grid, Element } from './styles';
import { v4 as uuidv4 } from 'uuid';

const CategoriesSection = ({ categories }) => (
    <Grid>
        {categories.map(cat => (
            <div key={uuidv4()}>
                <Element>
                    <a href={`/categoria/${cat.fields.url}`}>{cat.fields.name}</a>
                </Element>
            </div>
        ))}
    </Grid>
);

export { CategoriesSection };