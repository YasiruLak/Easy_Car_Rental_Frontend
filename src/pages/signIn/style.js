import Login from "../../assets/images/login.jpg";
import logo from "../../assets/images/logo.png";

export const styleSheet={
    container:{
        width:'100vw',
        height:'100vh',
        overflowX: 'hidden',
        overflowY: 'hidden',
        alignItems:'center',
        justifyContent:'center',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        //backgroundColor:'#5B6C8C'
    },

    signIn_container:{
        width:'100vw',
        height:'100vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        //border:'1px solid red'
    },

    signIn_container_1:{
        width:'60vw',
        height:'100vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        //border:'1px solid red',

    },

    signIn_container_2:{
        width:'40vw',
        height:'100vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    circle:{
        width:'40vw',
        height:'30vh',
        //border:'1px solid red',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textField:{
        width:'40vw',
        height:'60vh',
        //border:'1px solid red',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:'150px'
    },

    logo:{
        width:'150px',
        height:'150px',
        borderRadius:'100px',
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },

    userName:{
        width:'40vw',
        height:'20vh',
        //border:'1px solid red',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },

    passwordField:{
        width:'40vw',
        height:'20vh',
        //border:'1px solid red',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    loginButton:{
        width:'40vw',
        height:'20vh',
        //border:'1px solid red',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    }


}