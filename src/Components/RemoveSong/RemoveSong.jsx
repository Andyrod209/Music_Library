// was going to use this for user to type a number in a text box and delete their song of choice.


// import axios from "axios";
// import { useState } from "react";

// // figure out how to delete a song

// const RemoveSong = (props) => {
//     // Capture user number
//     const [id, setId] = useState('')

//     async function removeSong(){
//         let deletingSong = {
//             "id": id
//         };
//         console.log(deletingSong);
//         let response = await axios.delete(`http://127.0.0.1:8000/music/${id}`, deletingSong);
//         if(response.status === 201){
//             await props.getAllMusic;
//         };
//     }

//     function handleSubmit(formEvent){
//         formEvent.preventDefault();
//         removeSong();
//         }

//     return ( 
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Remove song by Id: <input type='text' placeholder="Id" onChange={(event) => setId(event.target.value)}/></label>
//                 <button type="submit">DELETE</button>
//             </form>
//         </div>
//      );
// }
 
// export default RemoveSong;