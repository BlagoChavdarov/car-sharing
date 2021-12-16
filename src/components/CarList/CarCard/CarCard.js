import { useState } from 'react';

import { Link} from 'react-router-dom';

import VignettteCard from './VignettteCard';


const CarCard = ({
    carInfo,
    handlerStatus
}) => {
    const [showComponent, setShowComponent] = useState('');

    // const CheckVignenetteOLD = (e) => {
    //     e.preventDefault();
    //     if( showComponent == "hide" ){
    //         setShowVignette("show");
    //     }else{
    //         setShowVignette("hide");
    //     }

    // };

    const CheckVignenette = (action) => {
        console.info("showComponent->>"+showComponent+"<--bf-->"+action);
        setShowComponent(action);
        console.info("showComponent->>"+showComponent+"<--af-->"+action);

    };


    const publishCar = (e) => {
        e.preventDefault();
        handlerStatus({car_num:carInfo.car_num, status:"public"});
    }
    const hideCar = (e) => {
        e.preventDefault();
        handlerStatus({car_num:carInfo.car_num,status:"private"});
    }

    const deleteCar = (e) => {
        e.preventDefault();
        handlerStatus({car_num:carInfo.car_num, status:"deleted"});
    }

    return (
        <li className="carInfo">
            <h3>Car plate: {carInfo.car_plate}</h3>
            <p className="description">Description: {carInfo.description}</p>
            <p className="img"  ><img  width="100" height="100" src={carInfo.imageUrl} /></p>

            <a href="#" className="button" onClick={() => CheckVignenette('vignette')} >show Vignette</a>

            <a href="#" className="button" onClick={() => CheckVignenette('comments')} >show Comments</a>

            <a href="#" className="button" onClick={() => CheckVignenette('history')}  >show History</a>
            

            <Link className="button" to={`/car/edit/${carInfo.car_num}`}>Edit</Link>
            {
                carInfo.status === "private" ?
                    <a href="#" className="button" onClick={publishCar} >Show</a>
                : 
                ""
            }
            
            {
                carInfo.status === "public" ?
                    <a href="#" className="button" onClick={hideCar} >Hide</a>
                :
                    ""
            }
            {
                carInfo.status !== "deleted" ?
                    <a href="#" className="button" onClick={deleteCar} >Delete</a>
                :
                    ""
            }
            <div>
            {
                showComponent === "comments" ?
                    <VignettteCard carInfo={carInfo} />
                :
                ""
            }
            {
                showComponent === "vignette" ?
                    <VignettteCard carInfo={carInfo} />
                :
                ""
            }

            {
                showComponent === "history" ?
                    <VignettteCard carInfo={carInfo} />
                :
                ""
            }

            </div>
        </li>
    );
}

export default CarCard;