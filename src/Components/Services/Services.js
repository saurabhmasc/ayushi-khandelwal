import React, { useRef, useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import { ServiceModel } from "../../Models/ServiceModel"
import serviceLogo from "../../img/logos/logo-1.jpg";
import "./Services.css";

function Services() {
    let services = [
        new ServiceModel(1, 'Logo Design', 'Logo description', '/'),
        new ServiceModel(2, 'Visiting Card', 'Visiting card description', '/'),
        new ServiceModel(3, 'Social Media Post', 'Social media post description', '/'),
        new ServiceModel(4, 'Video Service', 'VIdeo server description', '/'),
        new ServiceModel(5, 'Packaging Desgin', 'Packaging design description', '/')
    ];
    
    const ref = useRef();
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    }
    const { ref: serviceRef, inView } = useInView(options);

    // Use `useCallback` so we don't recreate the function on each render
    const setServiceRef = useCallback(
        (node) => {
        // Ref's from useRef needs to have the node assigned to `current`
        ref.current = node;
        // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
        serviceRef(node);
        },
        [serviceRef],
    );

    return (
        <div className="container-fluid services py-5">
            <div className="d-flex">
                {services.length===0? "No Todos to display": 
                    services.map((service)=>{
                        //return(<TodoItems key={todo.sno.toString()} todo={todo} onDelete={props.onDelete}/>)
                        return(
                            <div className={`${'card fade-in'} ${inView ? 'appear' : ''}`} ref={setServiceRef}>
                            <img src={serviceLogo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <p className="card-text">{service.description}</p>
                                <Link to={service.pageLink} className="btn btn-primary">View more</Link>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );

    /*
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFuntion, options);
        serviceCardRef.forEach(card => {
            observer.observe(card);
        });
        return () => {
            //do nothing
        }
    }, [serviceCardRef, options]);

    const callbackFuntion = (entries) => {
        
        entries.forEach(entry => { 
            entry.target.classList.toggle("appear", entry.isIntersecting);
        });
    }
    */

    /*
    return (
        <div className="container-fluid services py-5">
            <div className="d-flex">

                <div className={`${'card fade-in'} ${logoDesignServiceIsVisible ? 'appear' : ''}`} ref={logoDesignServiceRef}>
                    <img src={serviceLogo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">LOGO DESIGN</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>

                <div className={`${'card fade-in'} ${visitingCardServiceRefIsVisible ? 'appear' : ''}`} ref={visitingCardServiceRef}>
                    <img src={serviceLogo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">VISITING CARD</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
                
                <div className={`${'card fade-in'} ${socialMediaPostServiceIsVisible ? 'appear' : ''}`} ref={socialMediaPostServiceRef}>
                    <img src={serviceLogo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Social Media Post</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>

                <div className={`${'card fade-in'} ${videoServiceIsVisible ? 'appear' : ''}`} ref={videoServiceRef}>
                    <img src={serviceLogo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">VIDEO SERVICE</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>

                <div className={`${'card fade-in'} ${packagingServiceIsVisible ? 'appear' : ''}`} ref={packagingServiceRef}>
                    <img src={serviceLogo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">PACKAGING DESIGN</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div>
        </div>
        
    )*/
}

export default Services
