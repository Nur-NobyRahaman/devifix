import React from 'react';

import img1 from '../../../images/images1.jpeg'
import img2 from '../../../images/images2.jpeg'
import img3 from '../../../images/images3.jpeg'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel className='container mt-5'>
                <Carousel.Item>
                    <img style={{borderRadius: '35px'}}
                        className="d-block w-100 "
                        src={img1}
                        alt="First slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{borderRadius: '35px'}}
                        className="d-block w-100 "
                        src={img2}
                        alt="Second slide"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{borderRadius: '35px'}}
                        className="d-block w-100 "
                        src={img3}
                        alt="Third slide"
                    />

                    
                </Carousel.Item>
            </Carousel>
    );
};

export default Banner;