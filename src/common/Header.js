import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../utilities/constants';

const Header = (props) => {
    return (
        <View style={styles.containerStyle}>
            <TouchableOpacity
                activeOpacity={0.7}
            >
                <Text>{props.headerText}</Text>
            </TouchableOpacity>    
        </View>
    )
}

const styles = StyleSheet.create({

    containerStyle: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white1,
        marginBottom: 15
    },

})



export { Header };