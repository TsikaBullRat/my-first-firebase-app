import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    firstpage:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: "#32a852",
        width: "100%",
        height: "100%",
        paddingTop: "40%",
        textAlign: 'center'
    },
    secondpage:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: "#fcba03",
        width: "100%",
        height: "100%",
        paddingTop: "40%",
        textAlign: 'center'
    },
    largText:{
        fontSize: 50
    },
    mediumText:{
        fontSize: 20
    },
    buttonGroup:{
        flex:2,
        width: '100%'
    },
    button:{
        backgroundColor: "#fff",
        borderRadius: 25,
        width: '40%',
        height: 30,
        textAlign: 'center',
        margin: 10,
        marginLeft: '30%',
    },
    arrow:{
        fontSize:35,
    },
    input:{
        backgroundColor: '#fff',
        width: '80%',
        height: '5vh',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: '10%',
        borderRadius: 15,
        textAlign: 'center'
    },
    text:{
        fontSize: 15,
    },
    linkText:{
        fontWeight: 'bold'
    },
    titleText1:{
        fontSize: 35,
        color: "#fcba03"
    },
    titleText2:{
        fontSize: 35,
        color: "#32a852"
    }
})