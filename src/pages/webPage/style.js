import main1 from "../../assets/images/main1.png";
import about1 from "../../assets/images/about1.png";
import homeimg from "../../assets/images/homeimg.png";

export const styleSheet={
    container:{
        overflowX: 'hidden',
        overflowY: 'hidden'
    },

    home_container:{
        width:'100vw',
        height:'100vh',
        backgroundImage: `url(${main1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },

    navBar:{
        width: '100vw',
        height: '10vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'right',
        marginRight:'20px'
    },

    navItems:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'right',
        color:'white'
    },

    home_container_right:{
        width: '50vw',
        height: '90vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        // backgroundColor:'red',
        justifyContent: 'center',
        flexDirection:'column'
    },

    home_container_right_p:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        color:'black'
    },

    home_left:{
        width: '50vw',
        height: '45vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center'

    },

    about_container:{
        width:'100vw',
        height:'100vh',
        // backgroundImage: `url(${main1})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },

    about_container_left:{
        width:'55vw',
        height:'100vh',
        // backgroundColor:'green',
        display: 'flex',
        margin:'auto',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center',
        backgroundImage: `url(${homeimg})`,
        backgroundRepeat: 'no-repeat',
    },


    about_container_right:{
        width:'45vw',
        height:'100vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center',

    },

    about_right:{
        width: '45vw',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center',

    },

    about_right_1:{
        width: '45vw',
        height: '25vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center',
        // border:'1px solid red',
        paddingTop:'110px',
        paddingRight:'460px'
    },

    about_right_2:{
        width: '45vw',
        height: '30vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center',
        // border:'1px solid red',
        paddingBottom:'100px',
        paddingRight:'90px'
    },

    about_right_3:{
        width: '45vw',
        height: '45vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'space-evenly',
        // border:'1px solid red',
        flexDirection:'column',
        paddingRight:'100px'

    },

    vehicle_container:{
        width:'100vw',
        height:'100vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },


}