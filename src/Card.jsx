import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


function Card(props){
    return (
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3">
            <div className="card">
                <div className="card-header text-center">
                    <span className="fw-bold opacity-50 text-uppercase">{props.name.planType}</span>
                    <h2 className='h2 my-2'>${props.name.planRate}/month</h2>
                </div>
                <div className="card-body">
                    {
                        props.name.features.map((ele, index)=>{
                            return <p key={index} className={`card-text ${ele.enabled ? '' : 'opacity-25'}`}>
                                <FontAwesomeIcon icon={ele.enabled ? faCheck : faTimes} />
                                {ele.name}
                            </p>
                        })
                    }
                    
                    <div className="d-flex justify-content-center d-align-items-center">
                        <a href="#" className={`w-100 btn btn-primary text-uppercase fw-bold py-3 
                        ${
                            props.name.planType !== 'Pro'
                            ? props.name.planType === 'Plus' ? 'opacity-75' : 'opacity-50'
                            : ''
                        }`
                        }>Button</a>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Card;