import CreatePeep from "./Form/CreatePeep";

//const Main = ({ setLoginUser, user }) => (
    const Main=({ user, setLoginUser, peeps, setPeeps, loggedIn, setLoggedIn }) =>(
    <>
        <h5>Welcome to the homepage, {user.name}!</h5>
        <br />
        <p>Your email address is: {user.email}</p>
        <button className="btn btn-outline-danger" onClick={() => setLoginUser({})}>Log out</button>
<div className="container pb-3">
                <CreatePeep
                    peeps={peeps}
                    setPeeps={setPeeps}
                    user={user}
                    setLoginUser={setLoginUser}
                    setLoggedIn={setLoggedIn}
                  
                />
                </div>           
    </>
);

export default Main;