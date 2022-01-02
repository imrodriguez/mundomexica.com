import { useState, useEffect } from 'react';

export default function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)

    let observer
    try {
        observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        )
    } catch (err) {
        console.log(err);
    }
    

    useEffect(() => {
        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [observer, ref])

    return isIntersecting
}