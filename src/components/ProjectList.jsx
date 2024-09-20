import { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
    const[projects, setProjects] = useState([]); //Initialized as an empty array
    // const [projectCount, setProjectCount] = useState(null);
    

    useEffect(() =>{
        //Get all Projects
        getProjects();
    }, []);

    const getProjects =  async() =>{
        try{
            const response = await fetch('https://localhost:7023/Project', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
//Get's the information from the api wether there are any projects to fetch. and then the different responses to what can happen below.
        if(!response.ok){
            throw new Error ('Network response was not ok');
        }

        const data = await response.json();

        if (data.count > 0) {
            setProjects(data.projects);
        } else{
            alert ("there is no data in the system.");
        }
    } catch (error) {
        console.error('Error fetching projects:', error);
    }

        // fetch('https://localhost:7023/Project', {headers : {'Access-Control-Allow-Origin' : 'https://localhost:7023'}})
        // .then(res => res.json())
        // .then (res => {

        //     if(res.status === true && res.data.count > 0){
        //         setProjects(res.data.projects)
        //     }
            
        //     if(res.data.count === 0){
        //         alert("There is no data in the system.")
        //     }
        // })
        // .catch(error => {
        //     console.error(error.message)
        // });
    }


    return (
        <>
            {projects.length > 0 ?
            (projects.map((p, i) => <ProjectItem key={i} data={p}/>)): (<div>No projects availible</div>)}
        </>
    )
};

export default ProjectList;