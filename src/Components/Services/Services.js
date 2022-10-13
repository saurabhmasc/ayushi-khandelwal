import React, { useRef, useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import { ServiceModel } from "../../Models/ServiceModel"
import serviceLogo from "../../img/logos/logo-1.jpg";
import "./Services.scss";

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
        fallbackInView: true,
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
        <div className="container-fluid services d-flex flex-wrap justify-content-center align-items-center my-5">
            {services.length===0? "No Todos to display": 
                services.map((service, index)=>{
                    //return(<TodoItems key={todo.sno.toString()} todo={todo} onDelete={props.onDelete}/>)
                    return(
                        <div key={index} ref={setServiceRef} className={`${'card rounded-0 flex-grow-1 shadow border-0 p-4 w-100 fade-in'}  ${inView ? 'appear' : ''}`} style={{transitionDelay: '0.' + index + 's'}}>
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <p className="card-text">{service.description}</p>
                                <Link to={service.pageLink} className="btn btn-primary">View more</Link>
                            </div>
                            <img src={serviceLogo} className="card-img-bottom" alt="..."/>
                        </div>
                    )
                })
                }
        </div>
    );
}

export default Services
