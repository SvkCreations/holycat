import React, { useState, useEffect } from 'react';
import img from '../random-img-03.jpg';
import { saveAs } from 'file-saver';
import Loading from './Loading';

export default function RandomCats() {

    const [state, setState] = useState({
        results: [],
        loading: null
    })
    const fetchData = () => {
        setState({
            results:[],
            loading:true
        })
        fetch("https://api.thecatapi.com/v1/images/search?limit=9", {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "4bebae0d-0ec4-4787-8e77-8602741525af"
            }
        })
            .then(data => data.json())
            .then(data => {
                console.log(data)
                setState({
                    results: data,
                    loading: false
                })
            });
    };

    return (
        <div>
            <div className="row featurette d-flex align-items-center justify-content-center mt-4 mt-md-2 px-3 px-md-0">
                <div className="col-md-5 order-2 me-auto">
                    <h2 className="featurette-heading fw-bold text-primary display-6 lh-1 p-0 m-0">Get Random cats</h2>
                    <p className="lead mt-3">Get 10 random images and gifs. You can also download them for FREE! You get new images everytime you click the "Get now" button. Enjoy!</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={fetchData}>Get now</button>
                    </div>
                </div>
                <div className="col-md-5 me-auto">
                    <img src={img} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
                </div>
            </div>

            {/* Cat Image Gallery */}
            <div className="container px-4 py-3" id="custom-cards">
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    {state.loading && (<Loading/>)}
                    {state.results.map((cat) => {
                        return (
                            <div className="col" key={cat.id}>
                                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('${cat.url}')`, minHeight: `500px`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                    <div className="d-flex justify-content-end h-100">
                                        <a href={cat.url} className='btn btn-primary col-auto mt-auto d-flex align-items-center justify-content-center gap-1' target='_blank' download><iconify-icon icon="material-symbols:download-rounded" style={{fontSize:'24px'}}></iconify-icon>Download</a>
                                    </div>
                                </div>
                            </div>)
                    })}


                </div>
            </div>
        </div>
    )
}
