
import {useState , useContext, useEffect } from 'react';

import { AuthContext } from '../../../contexts/AuthContext';


import * as carService from '../../../services/carService';


const VignettteCard = ({
    carInfo
}) => {
    const { user } = useContext(AuthContext);
    
    const [Vignette, setVignette] = useState([]);

    useEffect(() => {
        carService.getVignetteData(user.sess,carInfo.car_num)
            .then(result => {
                setVignette(result);
            })
    },[]);

    return (
        <div>
            <p className="description">От дата: {Vignette.issueDateFormated}</p>
            <p className="description">До дата: {Vignette.validityDateToFormated}</p>
            <p className="description">Статус: {Vignette.status}</p>
            <p className="description">Сума: {Vignette.price} {Vignette.currency}</p>
            <p className="description">Клас превозно средство: {Vignette.vehicleClass}</p>
            <p className="description">Винетка №: {Vignette.vignetteNumber}</p>
        </div>
    );
}

export default VignettteCard;