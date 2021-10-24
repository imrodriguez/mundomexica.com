import { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';

const Comments = () => {
    const commentsRef = useRef();
    const isVisible = useOnScreen(commentsRef);

    const renderComments = () => {
        const d = document; const s = d.createElement('script');
        s.src = 'https://mundomexica.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    }

    useEffect(() => {
        if (isVisible) {
            renderComments();
        }
    }, [isVisible]);

    return (
      <div ref={commentsRef} id="disqus_thread" />
    )
};

export { Comments };