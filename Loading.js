import React from 'react'
import { StyleSheet, Text, View }from 'react-native'

function Loading(){
    return(
        <View style={styles.container}>

            <Text style={styles.for_text}>Getting weather data...!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:50,
        paddingVertical:250,
        backgroundColor:'#E0A4FD',
        shadowOpacity:2
    },
    for_text:{
        fontSize:30
    }
})

export default Loading;