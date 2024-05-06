import {StyleSheet } from "react-native";

export const styles = StylesSheet.create ({
    header: {
           padding: 25,
           flexDirection: 'row',


    },
    title: {
        color: '#fff',
        fontSize:24,
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom:0,
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
        paddingHOrizontal:20,
        backgroundColor:'#00000c0',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,

    },
    
        inputContainer: {
            backgroundColor:'#000',
            elevation:40,
            flex:1,
            height:50,
            marginvertical:20,
            borderRadius:30,
            paddingHorizontal:20,
            justifyContent:'center',
        }
    
})