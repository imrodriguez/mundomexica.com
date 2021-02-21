const Image = ({ image, width = 350, height }) => {
  const url = `${image.fields.file.url}${width && `?w=${width}`}`

  return (
    <picture>
    <source srcSet={`${url}&fm=webp`} />
    <img loading="lazy" title={image.fields.title} src={url} alt={image.fields.title} width={width} height={height}/>
  </picture>
  )
};

export { Image };