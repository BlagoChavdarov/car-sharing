
import {useState , useContext, useEffect } from 'react';

import { AuthContext } from '../../../contexts/AuthContext';


import * as carService from '../../../services/carService';

import { Alert } from 'react-bootstrap';


const VignettteCard = ({
    carInfo
}) => {
    const { user } = useContext(AuthContext);
    
    const [Vignette, setVignette] = useState([]);
    
    const [errors, setErrors] = useState({name: false});

    useEffect(() => {
        carService.getVignetteData(user.sess,carInfo.car_num)
            .then(result => {
                setVignette(result);
            }).catch(err => {
                setErrors(state => ({...state, name: 'Няма намерена валидна винетка' }));
            });
    },[]);
    //https://web.bgtoll.bg/Evignette/ValidityPeriod?vignetteVehicleTypeID=1
    return (
        <div>
            {
                errors
            ?
                <p >{errors.name}</p>
            :
                <>
                <p >От дата: {Vignette.issueDateFormated}</p>
                <p >До дата: {Vignette.validityDateToFormated}</p>
                <p >Статус: {Vignette.status}</p>
                <p >Сума: {Vignette.price} {Vignette.currency}</p>
                <p >Клас превозно средство: {Vignette.vehicleClass}</p>
                <p >Винетка №: {Vignette.vignetteNumber}</p>
                </>
            }
            <a href="#" onClick={()=> window.open("https://web.bgtoll.bg/Evignette/ValidityPeriod?vignetteVehicleTypeID=1", "_blank")} >Купи винетка</a>
        </div>
        
    );
}

export default VignettteCard;