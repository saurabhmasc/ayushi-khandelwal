import React, { useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer';
import "./Banner.css"

function Banner() {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    }
    const ref = useRef();
    const { ref: bannereRef, inView } = useInView(options);

    // Use `useCallback` so we don't recreate the function on each render
    const setBannereRef= useCallback(
        (node) => {
        // Ref's from useRef needs to have the node assigned to `current`
        ref.current = node;
        // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
        bannereRef(node);
        },
        [bannereRef],
    );

    return (
        <div className="banner d-flex justify-content-between">
            <p className={`${"left-banner banner-fade-in-bottom d-flex justify-content-center align-items-center"} ${inView ? 'appear' : ''}`} ref={setBannereRef}>
                    Lets Add Creativity
            </p>
            <p className={`${"right-banner banner-fade-in-top d-flex justify-content-center align-items-center"} ${inView ? 'appear' : ''}`} ref={setBannereRef}>
                    Welcome <br/>
                    To Our Design Stuff                
            </p>
        </div>
    )
}

export default Banner
