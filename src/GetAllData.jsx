import axios from "axios";
import React from "react";

const baseURL = "https://localhost:7023/Project";

function GetAllData(){
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => 
            {setPost(response.data);
            }); 
        }, []);

if(!post) return null;

return (
<div>
    <h1>{post.GetProject}</h1>
    <p>{post.Description}</p>
</div>
);

}

export default GetAllData;