import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const Player = () => {
    return (
        <View style= {styles.container}> 
            <Text>player</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    
    }
})
export default Player;