const Image = ({ image }) => (
  <picture>
    <source srcSet={`${image.fields.file.url}?fm=webp`} />
    <img loading="lazy" title={image.fields.title} src={image.fields.file.url} alt={image.fields.title} />
  </picture>
);

export { Image };