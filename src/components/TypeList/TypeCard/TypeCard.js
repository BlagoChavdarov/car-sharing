import { Link} from 'react-router-dom';

const TypeCard = ({
    type
}) => {
    return (
        <li className="otherPet">
            <h3>Name: {type.nm}</h3>
            <p className="img"  ><img  width="100" height="100" src={type.imageUrl} /></p>
            <Link className="button" to={`/car/${type._action}`}>{type.linkName}</Link>
        </li>
    );
}

export default TypeCard;