import { useState } from 'react';

import { Link} from 'react-router-dom';

import VignettteCard from './VignettteCard';


const CarCard = ({
    carInfo
}) => {
    

    const [showVignette, setShowVignette] = useState('hide');

    const CheckVignenette = (e) => {

        e.preventDefault();
        if( showVignette == "hide" ){
            setShowVignette("show");
        }else{
            setShowVignette("hide");
        }
        
        
    


    };



    console.info(carInfo);
    return (
        <li className="carInfo">
            <h3>Car plate: {carInfo.car_plate}</h3>
            <p className="description">Description: {carInfo.description}</p>
            <p className="img"  ><img  width="100" height="100" src={carInfo.imageUrl} /></p>
            <a href="#" className="button" onClick={CheckVignenette} >check Vignette</a>

            <Link className="button" to={`/car/edit/${carInfo.car_num}`}>Edit</Link>
            <Link className="button" to={`/car/publish/${carInfo.car_num}`}>Show</Link>
            <Link className="button" to={`/car/hide/${carInfo.car_num}`}>Hide</Link>
            <Link className="button" to={`/car/delete/${carInfo.car_num}`}>Delete</Link>
            <Link className="button" to={`/car/comments/${carInfo.car_num}`}>Comments</Link>
            <Link className="button" to={`/car/comments/${carInfo.car_num}`}>History</Link>
            <div>
            {
                showVignette === "show" ?
                    <VignettteCard carInfo={carInfo} />
                :
                    <p></p>
            }
            </div>
            
        </li>
    );
}

export default CarCard;