import { useDispatch, useSelector } from 'react-redux'
import { filterByVegetarian} from '../../redux/actions'

const Filters = () => {

    const dispatch = useDispatch();

    const pizzas = useSelector((state)=> state.pizzas);

    const handleInputChange = (event) => {
        dispatch(filterByVegetarian(event.target.value));
   
    };



  return (
    <div>
      <select name="vegetarian" onChange={handleInputChange} >
            <option value="all"> All Pizzas</option>
            <option value='yes'> ✓ vegetarian</option>
            <option value='no'>X no vegetarian</option>
    </select>

    </div>
  )
}

export default Filters
