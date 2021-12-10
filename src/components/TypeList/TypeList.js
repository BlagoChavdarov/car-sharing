import { useEffect, useState } from "react";

import * as typeServices from '../../services/typeServices';

import TypeCard from "./TypeCard/TypeCard";

const TypeList = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        typeServices.getAll()
            .then(result => {
                setPets(result);
            })
    }, []);

    return (
        <>
            {pets.length > 0
                ? (
                    <ul className="other-pets-list">
                        {pets.map(x => <TypeCard key={x._action} type={x} />)}
                    </ul>
                ) 
                : <p className="no-pets">No actions!</p>
            }
        </>
    );
}

export default TypeList;