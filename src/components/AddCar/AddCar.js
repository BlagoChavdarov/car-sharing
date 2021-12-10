import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import * as carService from '../../services/carService';



const AddCar = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onAddCarHandler = (e) => {
        e.preventDefault();

        let CarData = new FormData(e.currentTarget);


        let car_plate = CarData.get('car_plate');
        let description = CarData.get('description');
        let car_url = CarData.get('car_url');
        let user_num = user.user_num;
        let sess = user.sess;


        carService.add(car_plate, description,user_num,sess)
        .then((carResult) => {
            console.info(carResult);
            
            navigate('/dashboard');
        })
        .catch(err => {
            // TODO: show notification
            console.log(err);
        });

        console.info(CarData);
        // carService.add(CarData)
        //     .then(CarData) => {
        //         console.info("dddd");
        //         navigate('/dashboard');
        //     })
        //     .catch(err => {
        //         // TODO: show notification
        //         console.log(err);
        //     });
    }


    return (
    <section id="add-car-page" className="addCar">
            <form id="add-car-form" onSubmit={onAddCarHandler} method="POST">
                <fieldset>
                    <legend>Add Car</legend>
                    <p className="field">
                        <label htmlFor="car_plate">Car plate</label>
                        <span className="input">
                            <input type="text" name="car_plate" id="car_plate" placeholder="CA0000AA" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="car_url">Car Image</label>
                        <span className="input">
                            <input type="text" name="car_url" id="car_url" placeholder="Image of your car" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <input type="text" name="description" id="description" placeholder="Describe your car" />
                        </span>
                    </p>

                    <input className="button submit" type="submit" value="Add" />
                </fieldset>
            </form>
        </section>

);

}

export default AddCar;