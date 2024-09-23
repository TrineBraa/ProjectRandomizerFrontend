
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types'


const DeleteBtn = ({projectId, onDelete}) => {
    const HandleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            try {
                await fetch(`https://localhost:7023/Project?id=${projectId}`, { //Make sure the URL is the correct one to make sure the call works!
                    method: 'Delete', //Name the method you'd like this call to do
                });

                onDelete(projectId);
            } catch (error) { //Error handeling if somehting goes wrong so you get the error msg and can figure out what the issue is.
                console.error("Error deleting project:", error);
            }
        }
    };

    
    return(
        <Button variant="danger" onClick={HandleDelete}>
            Delete
        </Button>
    )
}

DeleteBtn.propTypes = {
    projectId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default DeleteBtn;