const DefaultSeo = ({ page }) => (
    <NextSeo
        title={`${page} | ${generalData.name}`}
        description={generalData.description}
        canonical={`https://mundomexica.com/`}
        openGraph={{
            url: `${page} | ${generalData.name}`,
            title: generalData.name,
            description: generalData.description,
            site_name: generalData.name,
        }}
        twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
        }}
    />
);

export { DefaultSeo };