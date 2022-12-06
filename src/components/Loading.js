import React from 'react';

export default function Loading(props) {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <div className="col-12">
                <img src={props.image} alt="" className="img-fluid" />
            </div>
            <p className="lead fw-bold">Cats Loading...</p>
        </div>
    )
}
