import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '50%',
    },

    view: {
        width: '80%',

        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,

        borderRadius: 10,
        backgroundColor: '#fff',
    },

    text: {
        padding: 10,

        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',

        color: '#fff'
    },

})