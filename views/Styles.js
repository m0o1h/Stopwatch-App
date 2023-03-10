import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop:30,
    },
    screen1_container:{
        flex: 1,
        width:'100%',
        height:"100%",
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hour:{
        color:'white',
        fontSize:180,
        fontWeight:'bold',
        lineHeight:220,
        height:180,
    },
    minute:{
        color:'grey',
        fontSize:180,
        fontWeight:'bold',
        lineHeight:220,
        height:180,
    },
    ampm:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        //lineHeight:100,
        height:80,
    },
    clockSeconds:{
        color:'white',
        fontSize:180,
        fontWeight:'bold',
        lineHeight:220,
        height:180,
        left:'8%',
    },
    timerSeconds:{
        color:'white',
        fontSize:180,
        fontWeight:'bold',
        lineHeight:220,
        height:180,
    },
    bottomNavigation:{
        flexDirection:'row',
        //backgroundColor:'white',
        width:'100%',
        position:'absolute',
        bottom:30,
        alignItems:'center',
        justifyContent:'center',
    },
    bottomButtonIcon:{
        marginHorizontal:50,
        width:50,
        height:40,
        textAlign:'center',
        borderRadius:20,
    },
    smallText:{
        fontSize:25,
    },
    startStop:{
        flexDirection:'row',
        marginVertical:30,
    },
    start:{
        color:'black',
        backgroundColor:"white",
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
        paddingHorizontal:30,
        paddingVertical:10,
        marginVertical:15,
        marginHorizontal:1,
        borderRadius:20,
    },
    stopContainer:{
        width:150,
        height:80,
    },
    stop:{
        color:'black',
        backgroundColor:"white",
        fontSize:20,
        marginHorizontal:1,
        fontWeight:'bold',
        paddingHorizontal:30,
        paddingVertical:10,
        marginVertical:15,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        textAlign:'center',
    },
    reset:{
        color:'black',
        backgroundColor:"white",
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
        paddingHorizontal:30,
        paddingVertical:10,
        marginHorizontal:1,
        marginVertical:15,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
    },
})

export {Styles}