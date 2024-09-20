
import ProjectList from "../components/ProjectList";
import CreateProjectModel from "../components/CreateProjectModel";
import { Col, Row, Button } from "react-bootstrap";

const Projects = () => {



    return (
        <div>
            <Row>
                <Col>
                    <h1>All Projects</h1>
                </Col>
                <Col className="align-self-center">
                    <Button className="float-right" onClick={() => {}}>Add a new project</Button>
                </Col>
            </Row>




            <ProjectList />
            <CreateProjectModel />
        </div>
    )
}

export default Projects;