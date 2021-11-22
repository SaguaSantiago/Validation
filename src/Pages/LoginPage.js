import LoginForm from "../Components/Form/Form"



export default function LoginPage ( props ) {

    return ( 
    <div>
        <LoginForm isLogin={ props.isLogin } />
        
        </div>
        )
}