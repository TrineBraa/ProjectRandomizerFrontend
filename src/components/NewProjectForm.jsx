import { useState } from "react"
import { Button, Form } from "react-bootstrap";
import PropTypes from 'prop-types';

const AddProject = ( {onAdd } ) => {
    const [projectName, setProjectName] = useState('');
    const [projectDesc, setProjectDesc] = useState('');
    const [projectSize, setProjectSize] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const NewProject = {
            name: projectName,
            description: projectDesc,
            projectSize: projectSize,
        };

        try { 
            const response = await fetch (`https://localhost:7023/Project`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json',},
                body: JSON.stringify(NewProject),
            });

            if (response.ok) {
                const contentType = response.headers.get ('Content-Type');
                if (contentType && contentType.includes('application/json')){
                    const result = await response.json();
                    onAdd(result);
                } else{
                    console.log('No JSON response, project added successfully.')
                }
                setProjectName('');
                setProjectDesc('');
                setProjectSize('');
            } else {
                console.error('Failed to add Project:', response.statusText);
            }
        }
        
        catch (error){
            console.error('Error adding project:', error);
        }
    };

return (
    <Form onSubmit={handleSubmit}>
            <Form.Group controlId="projectName">
                <Form.Label>Project Name</Form.Label>
                <Form.Control
                type='text'
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Project Description</Form.Label>
                <Form.Control
                type='text'
                value = {projectDesc}
                onChange= {(e) => setProjectDesc(e.target.value)}
                required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Project Size</Form.Label>
                <Form.Select
                    value= {projectSize}
                    onChange={(e) => setProjectSize(e.target.value)}
                >
                <option value ="">Select Size</option>
                <option value ="Small">Small</option>
                <option value ="Large">Large</option>
                </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">Add Project</Button>
    </Form>
)
}

AddProject.propTypes = {
    onAdd: PropTypes.func.isRequired,
}

export default AddProject;