import React from 'react';
import loading from '../loading.gif'

export default function Loading() {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <div className="col-12">
                <img src={loading} alt="" className="img-fluid" />
            </div>
            <p className="lead fw-bold">Cats Loading..</p>
        </div>
    )
}
