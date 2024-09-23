import { useEffect, useState } from "react";
import getData from "../../API";
import { Button } from "react-bootstrap";

export function GetRProject(){
    const [randomProject, setRandomProject] = useState(name);
    const [reload, setReload] = useState(0);

    useEffect(() => {
        getData().then((result) => {
            var randomIndex = Math.floor(Math.random() * result.length);
            const SelectedProject = result[randomIndex];

            setRandomProject(SelectedProject);
            console.log(SelectedProject);
        });
    }, [reload]);


const HandleRefresh = () => {
    
    setReload(prevReload => prevReload +1);
}


    return (
        <>
        <Button onClick={HandleRefresh}>Get another project</Button>
            <br/>
            <br/>
            <h3>{randomProject.name}</h3>
            <p>{randomProject.description}</p>
            <p>Project Size: {randomProject.projectSize}</p>
        
        </>
    )

}