import { useEffect, useRef } from 'react'

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef() // reference to save date so as not to lose from render to render

    useEffect(() => {
        if (isLoading) return
        //condition observable element in scope
        if (observer.current) observer.current.disconnect() // if observer created turn off watching

        const cb = function (entries, observer) {
            // field 'isIntersecting' - elem in scope or not
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        }
        //in order to have access to observer create' const observer = useRef()'
        observer.current = new IntersectionObserver(cb) // put new IntersectionObserver to field 'current' in observer
        observer.current.observe(ref.current) //element to watch
    }, [isLoading])
}
