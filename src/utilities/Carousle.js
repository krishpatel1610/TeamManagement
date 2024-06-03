import React from 'react';


const Carousle = () => {
    return (
    <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
            <div className="carousel-inner" id="carousel">
            <div class="carousel-caption" style={{zIndex:"10"}}>
                <form className="d-flex pt-10 " >
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn  text-white" style={{backgroundColor:"black"}} type="submit">Search</button>
                </form>
            </div>
            <div className="carousel-item active">
                <img src="https://blog.fortegra.com/hs-fs/hub/454246/file-2477573834-jpeg/Fortegra/blog/Partners.jpeg?width=700&name=Partners.jpeg" className="d-block w-100" style={{filter: "brightness(70%)"}} alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://th.bing.com/th/id/R.8639c44ad5fc4f4ba27d0e8560c39c08?rik=yq4nD9%2bbmlY8Gw&riu=http%3a%2f%2fcmapi.org%2fimg%2fFotolia_67042461_S_crop.jpg&ehk=nWE5nV0hi5OJncGUaD4N7QmWZBKI7iRTCuPH1hcmWHk%3d&risl=&pid=ImgRaw&r=0" className="d-block w-100" style={{filter: "brightness(70%)"}} alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://th.bing.com/th/id/OIP.c1p2TB_-P9XTvkXTh0E1ggHaD1?w=333&h=179&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="d-block w-100" style={{filter: "brightness(70%)"}} alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={{zIndex:"10",backgroundColor:"none"}}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style={{zIndex:"10"}}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
    );
}

export default Carousle;