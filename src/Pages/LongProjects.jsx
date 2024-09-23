import {  Col, Row } from "react-bootstrap";
import LongProjectList from "../components/LongProjectList";



const LongProject = () => {



    return (
        <div className="allProject-Container">
            
            <Row>
                <Col>
                    <h1 className="title-project">All Projects</h1>
                </Col>
                <Col className="ButtonContainer">
                    {/* <Button type="button" className="btn btn-primary" onClick={() => {}}>Add a new project</Button> */}
                </Col>
            </Row>

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
                                <LongProjectList/>
                                
                            </tbody>
                        </table>

        </div>
    )
}

export default LongProject;