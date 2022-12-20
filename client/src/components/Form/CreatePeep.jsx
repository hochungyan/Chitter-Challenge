import { useState } from "react";
import axios from "axios";

function CreatePeep({ user, peeps, setPeeps, setLoggedIn }) {

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [author, setAuthor] = useState("");

    
    const createPeep = async (e) => {
        e.preventDefault();
        try {
          setAuthor(user.name);
          const res = await axios.post("https://chitter-challenge-xbbf.onrender.com/createPeep", { title, message, author })
          alert(res.data.message);
          //Call the reload method on the window object to refresh the page
          //window.location.reload();
          setPeeps([...peeps, { title, message, author }])
          clearInputs();
          setLoggedIn(false);
        } catch (error) {
          console.error(error);
        }
      };
   
      
      

    const clearInputs = () => {
        const title = document.getElementById('title');
        const message = document.getElementById('message');

        title.value = "";
        message.value = "";
     
    }


    return (
<>
        <div className="card m-1">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <small className="text-success">Welcome, {user.name}!</small>
                    </div>
                <h5 className="card-title mt-3 text-center">Create Peep</h5>

                <form onSubmit={createPeep}>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Title"
                        id="title"
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />

                    < textarea
                        className="form-control mb-2"
                        placeholder="Peep Message"
                        id="message"
                        rows="3"
                        onChange={(event) => {
                            setMessage(event.target.value);
                        }}
                    />
        
                <button type="button" class="btn btn-outline-primary">
                <input type="submit" value="Send Peep" />
                </button>
                </form>

            </div>
        </div>
        </>
    );
}

export default CreatePeep;