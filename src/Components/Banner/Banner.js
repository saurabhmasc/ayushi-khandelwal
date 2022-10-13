import React, { useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer';
import "./Banner.scss"

function Banner() {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1
    }
    const ref = useRef();
    const { ref: WelcomeTextRef, inView } = useInView(options);

    return (
        <div className="banner d-flex justify-content-center align-items-center text-center">
            <h1 className={`${"welcome-text fade-in-bottom fs-1 fw-bold py-5"} ${inView ? 'appear' : ''}`} ref={WelcomeTextRef}>
                    Lets Add Creativity
                    Welcome <br/>
                    To Our Design Stuff                
            </h1>
        </div>
    )
}

export default Banner
