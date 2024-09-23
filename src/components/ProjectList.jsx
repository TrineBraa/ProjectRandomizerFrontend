import "../Css/project.css";
import DeleteBtn from "./DeleteBtn";
import PropTypes from "prop-types";


const ProjectList = ({projects, onDelete}) => {

    // const[projects, setProjects] = useState([]);


    // useEffect( () => {
    //     getData().then((result) => {  //Kaller til API å får 'result' som data
    //         setProjects(result);
    //         console.log(result);
            
    //     });
    // }, []); //Setter results inn i projects arrayet.


   //another way of writing out the text above
    // UseEffect(() >= {
    //     async function doThing(){
    //       const result = await getData();
    //     }
    //     });

   

   
    return(
        <>
                {projects.map((project) => (    
                    <tr className="Data-Row" key = {project.id}>
                        <th scope="row">{project.id}</th>
                        <td>{project.name}</td>
                        <td>{project.description}</td>
                        <td>{project.projectSize}</td>
                        <td>
                        <DeleteBtn projectId={project.id} onDelete={onDelete}/>
                        </td>
                    </tr>
                     //Display each project information
                    ))}
           
        </>
    )
};

ProjectList.propTypes = {
    projects: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
};


export default ProjectList;







// const ProjectList = () => {
//     const[projects, setProjects] = useState([]); //Initialized as an empty array
//     // const [projectCount, setProjectCount] = useState(null);
    

//     useEffect(() =>{
//         //Get all Projects
//         getProjects();
//     }, );

//     const getProjects =  async() =>{
//         try{
//             const response = await fetch('https://localhost:7023/Project', {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
// //Get's the information from the api wether there are any projects to fetch. and then the different responses to what can happen below.
//         if(!response.ok){
//             throw new Error ('Network response was not ok');
//         }

//         const data = await response.json();
        
//         if (data.count > 0) {
//             setProjects(projects);
//             console.log(data)
//         } else{
//             console.log(data)
//         }
//     } catch (error) {
//         console.error('Error fetching projects:', error);
        
//     }
  
//     }

    

//     return (
//         <div>Hello hello</div>
//         // <>
//         //     {projects.length > 0 ?
//         //     (projects.map((p, i) => <ProjectItem key={i} ProjectInfo={p}/>)): (<div>No projects availible</div>)}
//         // </>
//     )
// };

// export default ProjectList;


//---------------------------------------------------------------------------------------------------------------------------------------------------


      //First edit of the API call.
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


//--------------------------------------------------------------------------------------------------------------------------------------------------

//This one calls an error of undefined. this is an Axios API Get call.
//import axios from 'axios';
// const URL = "https://localhost:7023/Project";

// const ProjectList = () =>{
//     const [post, setPost] = useState(name);

//     useEffect(() =>{
//         axios.get(URL).then((response) => {setPost(response.data);

//         });
//     }, []);

//     if (!post) console.error();
//     ;
    
//     return(
//     <div>
//         <h1>{post.name}</h1>
//         <p>{post.desccription}</p>
//     </div>
//     );
// }