const Image = ({ image }) => (
    <img src={image.fields.file.url} alt={image.title} />
);

export { Image };