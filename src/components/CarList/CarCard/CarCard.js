import { useState } from 'react';

import { Link} from 'react-router-dom';

import VignettteCard from './VignettteCard';

import CommentsList from './CommentsList';

const CarCard = ({
    carInfo,
    handlerStatus
}) => {
    const [showComponent, setShowComponent] = useState('');

    const CheckVignenette = (action) => {
        setShowComponent(action);
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
            
            <h3>Регистрационен номер: {carInfo.car_plate}</h3>
            <p className="description">Описание: {carInfo.description}</p>
            <p className="description">Статус: {carInfo.status_view}</p>
            <p className="description">Създаден на: {carInfo.createdon}</p>
            {
                    carInfo.createdon!=carInfo.last_update
                ?
                <p className="description">Последна промяна: {carInfo.last_update}</p>
                :
                ""
            }
            
            
            <p className="img" ><img  width="100" height="100" src={carInfo.imageUrl} /></p>
                
            {
                showComponent === "vignette" ?
                <a href="#" className="button" onClick={() => CheckVignenette('')} >Скрий винетка</a>
            :
                <a href="#" className="button" onClick={() => CheckVignenette('vignette')} >Покажи винетка</a>
            }



            {
                showComponent === "comments" ?
                <a href="#" className="button" onClick={() => CheckVignenette('')} >Скрий коментари</a>
            :
                <a href="#" className="button" onClick={() => CheckVignenette('comments')} >Покажи коментари</a>
            }
            

            {
                showComponent === "history" ?
                    <a href="#" className="button" onClick={() => CheckVignenette('')}  >Скрий история</a>
                :
                    <a href="#" className="button" onClick={() => CheckVignenette('history')}  >Покажи история</a>
            }
            

            <Link className="button" to={`/car/add/${carInfo.car_num}`}>Редакция</Link>
            {
                carInfo.status === "private" ?
                    <a href="#" className="button" onClick={publishCar} >Публикувай</a>
                : 
                ""
            }
            
            {
                carInfo.status === "public" ?
                    <a href="#" className="button" onClick={hideCar} >Скрий</a>
                :
                    ""
            }
            {
                carInfo.status !== "deleted" ?
                    <a href="#" className="button" onClick={deleteCar} >Изтрий</a>
                :
                    ""
            }
            <div>
            {
                showComponent === "vignette" ?
                    <VignettteCard carInfo={carInfo} />
                :
                ""
            }
            {
                showComponent === "comments" ?
                    <CommentsList carInfo={carInfo} />
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