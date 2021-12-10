import { useEffect, useState } from "react";

import { Link} from 'react-router-dom';

import * as carService from '../../services/carService';

import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import CarCard from "./CarCard/CarCard";

const CarList = () => {
    const { user } = useContext(AuthContext);

    const [myCars, setMyCars] = useState([]);

    useEffect(() => {
        carService.getMyCars(user.user_num,user.sess)
            .then(result => {
                setMyCars(result);
            })
    }, []);

    return (
        <>
            {myCars.length > 0
                ? (
                    <ul className="my-car-list">
                        {myCars.map(x => <CarCard key={x.car_plate} carInfo={x} />)}
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