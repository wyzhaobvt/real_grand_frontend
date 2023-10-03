import { useNavigate } from "react-router-dom"
const SearchResultRow = (props) => {
    let navigate = useNavigate()
    let clickHandler = ()=>{
        navigate(`/searchedHouse/${props.house._id}`)
    }
    return (
                    <tr  key={props.house._id} onClick={clickHandler}>
                        <td scope="row">{props.house.address}</td>
                        <td>{props.house.price}</td>
                        <td>{props.house.description}</td>
                    </tr>
             );
}
 
export default SearchResultRow;