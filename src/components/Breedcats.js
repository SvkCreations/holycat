import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import loading from '../loading-02.gif'

export default function BreedCats() {
    const [breeds, setBreeds] = useState([])
    const [id, setID] = useState('abys');
    const [state, setState] = useState({
        result:[],
        loading:false
    })
    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/breeds", {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "4bebae0d-0ec4-4787-8e77-8602741525af"
            }
        })
            .then(data => data.json())
            .then(data => {
                setBreeds(data)
            });
    }, [])

    let handleChange=(e)=>{
        console.log(e.target.value)
        setID(e.target.value);
    }

    let getCats=()=>{
        setState({
            result:[],
            loading:true
        })
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=3`, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "4bebae0d-0ec4-4787-8e77-8602741525af"
            }
        })
            .then(data => data.json())
            .then(data => {
                setState({
                    result:data,
                    loading:false
                })
            });
    }
    
    return (
        <div id='breed'>
            <div>
                <div className="row featurette d-flex align-items-center justify-content-center mt-4 mt-md-2 px-3 px-md-0">
                    <div className="col-md-5 order-2 me-auto">
                        <h2 className="featurette-heading fw-bold text-primary display-6 lh-1 p-0 m-0">Get Cats by breed</h2>
                        <p className="lead mt-3">Filter Cat images and GIFs by their breed. There are 60+ cat breeds available to filter. Enjoy!</p>
                        <label htmlFor="selectBreed">Select a breed:</label>
                        <select className="form-select mt-2 mb-4" aria-label="Default select example" value={id} id='selectBreed' onChange={handleChange}>
                            {breeds.map((breed)=>{
                                return(<option value={breed.id} key={breed.id}>{breed.name}</option>)
                            })}
                        </select>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" id='getCats' onClick={getCats} >Get Cats</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Cat Image Gallery */}
            <div className="container px-4 py-3" id="custom-cards">
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    {state.loading && (<Loading image={loading}/>)}
                    {state.result.map((cat) => {
                        return (
                            <div className="col" key={cat.id}>
                                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('${cat.url}')`, minHeight: `500px`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                    <div className="d-flex justify-content-end h-100">
                                        <a href={cat.url} className='btn btn-primary col-auto mt-auto d-flex align-items-center justify-content-center gap-1' target='_blank' download><iconify-icon icon="material-symbols:download-rounded" style={{ fontSize: '24px' }}></iconify-icon>Download</a>
                                    </div>
                                </div>
                            </div>)
                    })}


                </div>
            </div>
        </div>

        
    )
}
