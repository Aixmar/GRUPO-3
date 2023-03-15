import { Link } from "react-router-dom"

const Card = (props) => {
    return (
        <Link to={`/pizzadetail/${props.id}`}>
            <div>
                <img src={props.image} alt=""></img>
            </div>
            <div>
                <h1>{props.name}</h1>
            </div>
        </Link>
    )
}

export default Card