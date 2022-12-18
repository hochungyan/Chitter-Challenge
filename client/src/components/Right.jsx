import Login from "./Form/Login"
import CreatePeep from "./Form/CreatePeep";

function Right({ user, setLoginUser, peeps, setPeeps, loggedIn, setLoggedIn }) {

    if (loggedIn) {
        return (
            <div className="col-3 bg-light border rounded-3">
                <CreatePeep
                    peeps={peeps}
                    setPeeps={setPeeps}
                    user={user}
                    setLoginUser={setLoginUser}
                    setLoggedIn={setLoggedIn}
                />
            </div>
        );
    } else {
        return (
            <>
                 <div className="col-3 bg-light border rounded-4">
                <Login setLoginUser={setLoginUser} setLoggedIn={setLoggedIn} />
            </div>
            </>
        );
    }
}

export default Right;