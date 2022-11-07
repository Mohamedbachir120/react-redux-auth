import {useSelector} from "react-redux"
import { selectCurentUser,selectCurentToken } from "./authSlice"
import {Link} from "react-router-dom"

const Welcome = () =>{

    const user = useSelector(selectCurentUser)
    const token = useSelector(selectCurentToken)

    const welcome = user ? `welcome ${user}` : 'Welcome!'
    const tokenAbbr =`${token.slice(0,9)}...`  
    const content = (
        <section className="welcome">
            <h1>{welcome}</h1>
            <p>Token :{tokenAbbr}</p>
            <p>
                <Link to='/usersList'> Go to the users List </Link>
            </p>
        </section>
    )

    return content
}
export default Welcome