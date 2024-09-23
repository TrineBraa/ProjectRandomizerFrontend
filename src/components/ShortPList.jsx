import { useEffect, useState } from "react";
import getData from "../../API";
import "../Css/project.css";
import DeleteBtn from "./DeleteBtn";


export function ShortPList () {

    const [projects, setProjects] =useState([]);

    useEffect ( () => {
        getData().then((result) => {
            const FilterProject = result.filter (project => project.projectSize === "Small");
            setProjects(FilterProject);
            console.log(FilterProject);
        });
    }, []);


    const deleteProject = (id) => {
        setProjects((prevProjects) => prevProjects.filter(project => project.id !== id));
    }



    return(
        <>
            {projects.map((project) => (
               <tr className="Data-Row" key = {project.id}>
               <th scope="row">{project.id}</th>
               <td>{project.name}</td>
               <td>{project.description}</td>
               <td>{project.projectSize}</td>
               <td>
                    <DeleteBtn projectId={project.id} onDelete={deleteProject}/>
                </td>
           </tr>  
            ))}

        </>
    );

}

