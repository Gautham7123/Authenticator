import { GoogleLogout } from 'react-google-login';
const ClientID = "784337163663-1arov5q17k9gabh2vd8fpupuf75u9t1r.apps.googleusercontent.com";
function Logout(){
    const onSuccess =() =>{
        console.log("LOGOUT SUCCESSFUL!");
    }

    return(
        <div id="signOutButton">
            <GoogleLogout
            ClientID={ClientID}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;