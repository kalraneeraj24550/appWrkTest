import React from 'react';
import { Text, StyleSheet, ImageBackground, View, Image, TouchableOpacity  } from 'react-native';
import { colors } from '../../utilities/constants';

const ListUsers = (props) => {
    return (
        <View style={styles.wholeViewStyle}>
            <Image
                source={}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    wholeViewStyle: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        backgroundColor: colors.white1
    }
}) 


export { ListUsers };