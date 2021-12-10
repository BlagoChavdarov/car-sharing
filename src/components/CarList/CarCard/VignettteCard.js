
import {useState , useContext, useEffect } from 'react';

import { AuthContext } from '../../../contexts/AuthContext';


import * as carService from '../../../services/carService';


const VignettteCard = ({
    carInfo
}) => {
    const { user } = useContext(AuthContext);
    
    const [Vignette, setVignette] = useState({});
    console.info(carInfo);
    useEffect(() => {
        carService.getVignetteData(user.sess,carInfo.car_num)
            .then(result => {
                setVignette(result);
            })
    }, {});

    console.info(carInfo);
    return (
        <div>
            <p className="description">Description: {Vignette.description}</p>
        </div>
    );
}

export default VignettteCard;