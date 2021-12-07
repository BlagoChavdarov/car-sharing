import { Link} from 'react-router-dom';

const TypeCard = ({
    type
}) => {
    return (
        <li className="otherPet">
            <h3>Name: {type.nm}</h3>
            <p className="img"><img src={type.imageUrl} /></p>
            <Link className="button" to={`/details/${type._action}`}>Details</Link>
        </li>
    );
}

export default TypeCard;