import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../utilities/constants';

const Button = (props) => {
    return (
        <View style={styles.containerStyle}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => props.navigation.navigate('Cart')}
            >
                <Text style={styles.buttonTextStyle}>
                     {props.children}
           
                </Text>
            </TouchableOpacity>    
        </View>
    )
}

const styles = StyleSheet.create({

    containerStyle: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightGreenColor,
    },

    buttonTextStyle: {
        fontSize: 18,
        color: colors.black1
    }
})



export { Button };