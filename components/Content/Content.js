import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { dtrOptions } from './contentConfig';
import styles from './Content.module.css';

const Content = ({ content }) => (
  <div className={styles.ContentWrapper}>
    {documentToReactComponents(content, dtrOptions)}
  </div>
);

export { Content };