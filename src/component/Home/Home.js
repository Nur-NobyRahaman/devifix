import React from 'react';
import { Button} from 'react-bootstrap';


import img4 from '../../images/images4.jpeg'
import { Link } from 'react-router-dom';
import Banner from '../pages/Banner/Banner';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SignupSigninButton from '../pages/Banner/SignupSigninButton/SignupSigninButton';

import ShowFiled from '../pages/ShowFiled/ShowFiled';
const Home = () => {
    return (
        <>
            
            <SignupSigninButton></SignupSigninButton>
            <Banner></Banner>

            <ShowFiled></ShowFiled>

        </>
    );
};

export default Home;