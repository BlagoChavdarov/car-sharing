import { useState, useEffect, useMemo } from 'react';

import * as carService from '../services/carService';

const useCarState = (sess, car_num) => {
    const [carInfo, setCarInfo] = useState({});
    

    const controller = useMemo(() => {
        const controller = new AbortController();
        return controller;
    }, [])

    useEffect(() => {

        carService.getOneCar(sess, car_num,controller.signal)
            .then(carResult => {
                setCarInfo(carResult);
            })

        return () => {
            controller.abort();
        }
    }, [car_num, controller]);


    return [
        carInfo,
        setCarInfo
    ]
};

export default useCarState;