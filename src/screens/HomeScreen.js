import React from 'react';
import {  StyleSheet, FlatList, ImageBackground,  View, Text } from 'react-native';

const HomeScreen = () => {
    return (
        <View
           style={styles.wholeViewStyle}
        >
                <FlatList
                        data={[{},{},{}]}
                        keyExtractor={(item, index) => index + ''}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) =>
                        <Text>asd</Text>
                            // <ListProducts
                            //     item={item}
                            //     type='home'
                            // />
                        }
                />
            </View>
    )
}

const styles = StyleSheet.create({
    wholeViewStyle: {
        flex: 1,
    },

});

const mapStateToProps = ({ appInfo }) => {
    const {
        getAllImageData,
        loading
    } = appInfo;

    return {
        getAllImageData,
        loading
    };
};


export default HomeScreen
