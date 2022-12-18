import { useState } from "react";
import Left from "./Left";
import Right from "./Right";

function Body() {
    const [peeps, setPeeps] = useState([]);
    const [user, setLoginUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <>
        <div className="container pb-5">
        <div className="row gap-3">
                 
                    <Left peeps={peeps}
                        setPeeps={setPeeps}
                        user={user}
                        setLoginUser={setLoginUser}
                        loggedIn={loggedIn}
                        setLoggedIn={setLoggedIn}
                    />
        <Right
                        peeps={peeps}
                        setPeeps={setPeeps}
                        user={user}
                    />

          </div>
          </div>        
          
        </>
    );
}

export default Body;