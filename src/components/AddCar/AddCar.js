import { useContext, useState,useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import * as carService from '../../services/carService';

import { useParams } from 'react-router-dom';

import useCarState from '../../hooks/useCarState';



const AddCar = () => {
    const { user } = useContext(AuthContext);
    const { car_num } = useParams(); 
    let sess = user.sess;
    
    const [carInfo, setCarInfo] = useCarState(sess, car_num);
    

    
    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsSelected] = useState(false);

	const ChangeHandler = (file) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setSelectedFile(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };

		console.info(selectedFile);
	};

    


    const onAddCarHandler = (e) => {
        e.preventDefault();

        let CarData = new FormData(e.currentTarget);


        let car_plate = CarData.get('car_plate');
        let description = CarData.get('description');
        let file = selectedFile;


        
    
        let user_num = user.user_num;
        let imageUrlDB = carInfo.imageUrlDB;

        carService.add(sess, car_plate, description, user_num, file, car_num, imageUrlDB )
        .then((carResult) => {
            navigate('/car/list');
        })
        .catch(err => {
            console.log(err);
        });

    }

    const deleteImage = (e) => {
        e.preventDefault();

        setCarInfo(state => ({...state, imageUrl: ''}))
        setCarInfo(state => ({...state, imageUrlDB: ''}))
        
    }


    return (
    <section id="add-car-page" className="addCar">
            <form id="add-car-form" onSubmit={onAddCarHandler} method="POST">
                <fieldset>
                    <legend>Добавяне на автомобил</legend>
                    <p className="field">
                        <label htmlFor="car_plate">Регистрационен номер: </label>
                        <span className="input">
                            <input type="text" defaultValue={carInfo.car_plate} name="car_plate" id="car_plate" placeholder="CA0000AA" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Описание: </label>
                        <span className="input">
                            <textarea defaultValue={carInfo.description} name="description" id="description" placeholder="Описание на автомобил"  />
                        </span>
                    </p>

                    <div className="field">
                        <label htmlFor="car_url">Снимка: </label>
                        <span className="input">
                            {
                                carInfo.imageUrl
                            ?
                                <>
                                    <div className="img"  ><img  width="100" height="100" src={carInfo.imageUrl} /></div>
                                    <a href="#" className="button" onClick={deleteImage} >Изтрий</a>
                                </>
                                
                            :
                                <input type="file" id="file" name="file" onChange={(event) => {ChangeHandler(event.target.files[0])}}  />
                            }
                            
                        </span>
                    </div>

                    
                    <input className="button submit" type="submit" value="Потвърди" />
                </fieldset>
            </form>
        </section>

);

}

export default AddCar;