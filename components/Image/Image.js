const Image = ({ image }) => (
  <img title={image.fields.title} src={image.fields.file.url} alt={image.fields.title} />
);

export { Image };