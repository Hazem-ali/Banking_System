import React from 'react';
import image from '../../assets/images/banking.jpg'
const Home = () => {
    return (
        <div>
            <div className='container-fluid' >
                <h1 className='m-5'>
                    Welcome To Our Banking System
                </h1>
                <h4 className='m-5'>
                    Here we facilitate money transactions via few clicks
                </h4>

            </div>
            <div >
                <img src={image} className="container-fluid p-0" alt="Responsive image" ></img>

            </div>
        </div>
    );
}

export default Home;
