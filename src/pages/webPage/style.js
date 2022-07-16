import main1 from "../../assets/images/main1.png";


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
        height:'80vh',
        // backgroundImage: `url(${main1})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        backgroundColor:'#DD1F3F'
    },

    about_container_left:{
        width:'55vw',
        height:'80vh',
        display: 'flex',
        margin:'auto',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center',


    },

    about_container_right:{
        width:'45vw',
        height:'80vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center',
    },

    about_right:{
        width: '45vw',
        height: '80vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center',

    },

    about_right_1:{
        width: '45vw',
        height: '20vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center',
         //border:'1px solid white',
        paddingTop:'60px',
        paddingRight:'460px'
    },

    about_right_2:{
        width: '45vw',
        height: '25vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center',
         //border:'1px solid white',
        paddingBottom:'40px',
        paddingRight:'90px'
    },

    about_right_3:{
        width: '45vw',
        height: '35vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'space-evenly',
         //border:'1px solid red',
        flexDirection:'column',
        paddingRight:'100px'

    },

    service_container:{
        width:'100vw',
        height:'120vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',


    },

    service_header:{
        width:'100vw',
        height:'20vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center',
        flexDirection:'row',


    },
    service_card_content:{
        width:'100vw',
        height:'100vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center',

    },

    service_card_content_grid:{
        width:'100vw',
        height:'50vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',

    },

    service_card_content_grid_row:{
        width:'33.33vw',
        height:'50vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        // border: '1px solid red',
        alignContent:'center'

    },

    driver_container:{
        width:'100vw',
        height:'70vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        backgroundColor:'#DD1F3F'

    },

    driver_container_left:{
        width:'50vw',
        height:'70vh',
    },

    driver_container_right:{
        width:'50vw',
        height:'70vh',
        display:'flex',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center',
    },

    driver_left_1:{
        height:'50vh',
        width:'50vw',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center',

    },

    vehicle_container:{
        width:'100vw',
        height:'150vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',

    },

    vehicle:{
        width:'100vw',
        height:'130vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',

    },

    vehicle_detail:{
        width:'90vw',
        height:'120vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',

    },

    vehicle_detail_row:{
        width:'90vw',
        height:'60vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },

    vehicle_card:{
        width:'29vw',
        height:'60vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },

    vehicle_card_desc:{
        width:'23vw',
        height:'7vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        marginTop:'30px',

    },

    desc_1:{
        width:'11vw',
        height:'7vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',

    },

    vehicle_card_detail:{
        width:'22.5vw',
        height:'7vh',
        // border:'1px solid red',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
    },

    vehicle_card_subDetail:{
        width:'7.5vw',
        height:'7vh',
        border:'1px solid red',
        //backgroundColor:'red',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'left',
    },

    footer_container:{
        width:'100vw',
        height: '50vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#DD1F3F'
    },

    footer_content:{
        width:'100vw',
        height: '40vh',
        //border:'1px solid red',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
    },
    footer_content_1:{
        width:'35vw',
        height: '40vh',
        //border:'1px solid red',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
    },

    content_1_head:{
        width:'12vw',
        height: '20vh',
        //border:'1px solid red',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },

    content_2_head:{
        width:'23vw',
        height: '20vh',
        //border:'1px solid red',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },

    content_1_head_1:{
        width:'35vw',
        height: '20vh',
        //border:'1px solid red',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        padding:'10px'
    },

    footer_content_2:{
        width:'15vw',
        height: '40vh',
        //border:'1px solid red',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },

    footer_content_3:{
        width:'20vw',
        height: '40vh',
        //border:'1px solid red',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },

    footer_content_4:{
        width:'30vw',
        height: '40vh',
        //border:'1px solid red',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
    },

    copyright:{
        width:'100vw',
        height: '10vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
    }

}