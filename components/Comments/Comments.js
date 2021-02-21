import { useEffect } from 'react';

const Comments = ({ url, id, title }) => {
    useEffect(() => {
        window.disqus_config = () => {
            this.page.url = url;
            this.page.identifier = id;
        };
        var d = document, s = d.createElement('script');
        s.src = 'https://mundomexica.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    }, []);

    return (
        <div id="disqus_thread"></div>
    )
};

export { Comments };