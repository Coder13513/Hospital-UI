import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    headText: {
        fontSize: 20,
        textAlign: "right",
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems:'center',
        paddingBottom:'20%',
        paddingTop:'10%',
        //  backgroundColor:'yellow'
    },
    headStyle: {
        //  backgroundColor: 'pink',
        // paddingBottom: 5,
        paddingTop:50,
        paddingRight: 5,
        flex: 4,
        flexDirection:'row-reverse',
        borderBottomWidth:2,
        borderColor:'black',
        // backgroundColor:'white'
    },
   
    logostyle: {
        flex:8,
        paddingTop:'30%',
        width:50,
        height:50        
    },
    btncontainer:{
      flex:2,
    //   backgroundColor:'slategrey'  
    },
    btnstyle:{
       
            backgroundColor: '#17baa1',
            borderWidth: 0,
            // color: 'red',
            borderColor: '#7DE24E',
            height: 30,
            // width:50,
            // size:10,
            alignItems: 'center',
            borderRadius: 30,
            marginLeft: 35,
            marginRight: 35,
            marginTop: 30,
            marginBottom: 20,
        
     
    },
    btntext:{
        fontSize:18,
        paddingBottom:10,
        color:'black'
    },
    btnrow:{
        // flex:8,
        flexDirection:"row"
    },
    inputs:{
        flex:1,
        width:'80%',
        padding:10,
        // backgroundColor:'purple'
    },
    multiInputs:{
        flex:2,
        width:'90%',
        paddingTop:20
    },
    buttons:{
        marginTop:14,
        fontSize:16
    },
    registerHeading:{
        fontSize:16,
        flex:1,
        backgroundColor:'yellow'
    },
    labels:{
        paddingBottom:10
    },
    registeContainer:{
        flex:1,
        alignItems:"center",
        paddingBottom:'45%',
        paddingTop:'10%'
    },
    heading:{
        borderBottomWidth:2,
        borderColor:'black',
        fontSize:25,
        // marginTop:'2%',
    },
    heroImage:{
        // flex:1,
        height:300,
        width:400,
        
    }
   


})