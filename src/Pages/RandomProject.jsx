
import "../Css/project.css"
import { GetRProject } from "../components/GetRProject";


const RandomProject = () => {



    return (
        <div className="randomProject-Container">
            <h2>Here is your random project!</h2>
           <br/>

            <GetRProject/>

        </div>
    )
}

export default RandomProject;