import { GoogleLogin } from 'react-google-login';
const ClientID = "784337163663-1arov5q17k9gabh2vd8fpupuf75u9t1r.apps.googleusercontent.com";
function Login(){
    const onSuccess =(res) =>{
        console.log("LOGIN SUCESS! Current User :",res.profileObj);
    }
    const onFailure =(res) =>{
        console.log("LOGIN FAILED :",res);
    }
    return(
    
            <GoogleLogin
            ClientID={ClientID}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiepolicy={'single_host_origin'}
            isSignedIn={true}
            />
    
    )
}
export default Login;