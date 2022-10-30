import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import img4 from '../../../images/images4.jpeg'
import { Button } from 'react-bootstrap';
import '../../Styles/Home.css'
const ShowFiled = () => {
    return (
        <div>

            {/* Why Devifix   */}


            <h1 className='m-5'>Why Devifix</h1>

            <div className='  container border border-2 rounded' id='Why_Devifix'>
                <div className='row  pt-5 pb-5'>
                    <div className='col-sm-12 col-md-6'>
                        <div className='devifix_img mb-5'>
                            <img className='w-75 devifix_img_border' src={img4} alt="" />
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt porro facere cum nihil, tempore voluptatum ipsa magnam distinctio illum, dignissimos esse explicabo, omnis assumenda odit impedit soluta voluptatem libero unde.</p>

                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='devifix_button' variant="danger">Continue </Button>
                            <div className='continueArrow btn btn-danger rounded-circle'>
                                <ArrowForwardIosIcon className='mb-2' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* platform   */}


            <h1 className='m-5'>Platform</h1>

            <div className='  container border border-2 rounded' id='Platform'>
                <div className='row  pt-5 pb-5'>

                    <div className='col-sm-12 col-md-6'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt porro facere cum nihil, tempore voluptatum ipsa magnam distinctio illum, dignissimos esse explicabo, omnis assumenda odit impedit soluta voluptatem libero unde.</p>

                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='devifix_button' variant="danger">Continue </Button>
                            <div className='continueArrow btn btn-danger rounded-circle'>
                                <ArrowForwardIosIcon className='mb-2' />
                            </div>
                        </div>

                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <div className='devifix_img mb-5'>
                            <img className='w-75 devifix_img_border' src={img4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Solution   */}


            <h1 className='m-5'>Solution</h1>

            <div className='  container border border-2 rounded' id='Solution'>
                <div className='row  pt-5 pb-5'>
                    <div className='col-sm-12 col-md-6'>
                        <div className='devifix_img mb-5'>
                            <img className='w-75 devifix_img_border' src={img4} alt="" />
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt porro facere cum nihil, tempore voluptatum ipsa magnam distinctio illum, dignissimos esse explicabo, omnis assumenda odit impedit soluta voluptatem libero unde.</p>

                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='devifix_button' variant="danger">Continue </Button>
                            <div className='continueArrow btn btn-danger rounded-circle'>
                                <ArrowForwardIosIcon className='mb-2' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Price  */}


            <h1 className='m-5'>Price</h1>

            <div className='  container border border-2 rounded'id='Price'>
                <div className='row  pt-5 pb-5'>

                    <div className='col-sm-12 col-md-6'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt porro facere cum nihil, tempore voluptatum ipsa magnam distinctio illum, dignissimos esse explicabo, omnis assumenda odit impedit soluta voluptatem libero unde.</p>

                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='devifix_button' variant="danger">Continue </Button>
                            <div className='continueArrow btn btn-danger rounded-circle'>
                                <ArrowForwardIosIcon className='mb-2' />
                            </div>
                        </div>

                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <div className='devifix_img mb-5'>
                            <img className='w-75 devifix_img_border' src={img4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Resources   */}


            <h1 className='m-5'>Resources</h1>

            <div className='  container border border-2 rounded' id='Resources'>
                <div className='row  pt-5 pb-5'>
                    <div className='col-sm-12 col-md-6'>
                        <div className='devifix_img mb-5'>
                            <img className='w-75 devifix_img_border' src={img4} alt="" />
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt porro facere cum nihil, tempore voluptatum ipsa magnam distinctio illum, dignissimos esse explicabo, omnis assumenda odit impedit soluta voluptatem libero unde.</p>

                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='devifix_button' variant="danger">Continue </Button>
                            <div className='continueArrow btn btn-danger rounded-circle'>
                                <ArrowForwardIosIcon className='mb-2' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShowFiled;