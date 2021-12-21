
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
    //https://web.bgtoll.bg/Evignette/ValidityPeriod?vignetteVehicleTypeID=1
    return (
        <div>
            <p >От дата: {Vignette.issueDateFormated}</p>
            <p >До дата: {Vignette.validityDateToFormated}</p>
            <p >Статус: {Vignette.status}</p>
            <p >Сума: {Vignette.price} {Vignette.currency}</p>
            <p >Клас превозно средство: {Vignette.vehicleClass}</p>
            <p >Винетка №: {Vignette.vignetteNumber}</p>
            <a href="#" onClick={()=> window.open("https://web.bgtoll.bg/Evignette/ValidityPeriod?vignetteVehicleTypeID=1", "_blank")} >Купи винетка</a>
        </div>
        
    );
}

export default VignettteCard;