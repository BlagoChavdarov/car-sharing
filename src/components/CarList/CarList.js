import { useEffect, useState } from "react";

import { Link} from 'react-router-dom';

import * as carService from '../../services/carService';

import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import CarCard from "./CarCard/CarCard";

const CarList = () => {
    const { user } = useContext(AuthContext);

    const [myCars, setMyCars] = useState([]);
    const [reloadCount, setReloadCount] = useState(1);

    useEffect(() => {
        carService.getMyCars(user.sess,user.user_num)
            .then(result => {
                setMyCars(result);
            })
    }, [reloadCount]);

    const handlerStatus = ({
        status,
        car_num
    }) => {
        carService.changeStatus(user.sess,car_num,status)
            .then(result => {
                setReloadCount(reloadCount+1);
        })
        
        
    }

    return (
        <>
            {myCars.length > 0
                ? (
                    <ul className="my-car-list">
                        {myCars.map(x => <CarCard key={x.car_plate} handlerStatus = {handlerStatus} carInfo={x} />)}
                    </ul>
                ) 
                : <p className="no-cars">
                    <Link className="button" to={`/car/add`}>Add new car</Link>
                </p>
            }
        </>
    );
}

export default CarList;