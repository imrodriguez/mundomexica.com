const Image = ({ image }) => (
  <img src={image.fields.file.url} alt={image.fields.title} />
);

export { Image };