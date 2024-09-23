
import ProjectList from "../components/ProjectList";
import { Col, Row, Button } from "react-bootstrap";
import AddProject from "../components/NewProjectForm";
import "../Css/project.css";
import { useEffect, useState } from "react";
import getData from "../../API";

const Projects = () => {
    const [projects,setProjects] = useState([]);
   const [showForm, setShowForm] = useState(false);

    useEffect(()=> {
        getData().then((result) => {
            setProjects(result);
        });
    }, []);

    const handleFormToggle = () => {
        setShowForm(!showForm);
    };

    const handleAddProject = (newProject) => {
        setProjects([...projects, newProject]);
        setShowForm(false);
    }
  
    const deleteProject = (id) => {
        setProjects((prevProjects) => prevProjects.filter(project => project.id !== id));
    }


    return (
        <div className="allProject-Container">
            
            <Row>
                <Col>
                    <h1 className="title-project">All Projects</h1>
                </Col>
                <Col className="ButtonContainer">
                    <Button type="button" className="btn btn-primary" 
                    onClick={handleFormToggle}>
                        {showForm ? "Cancel" : "Add a new project"}
                    </Button>
                </Col>
            </Row>

            {showForm && <AddProject onAdd={handleAddProject} />}


            <table className ="table table-dark table-striped">
                            <thead className="table-head">
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Project Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Project Size</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                <ProjectList projects= {projects} onDelete = {deleteProject}/>
                                
                            </tbody>
                        </table>

        </div>
    )
}

export default Projects;