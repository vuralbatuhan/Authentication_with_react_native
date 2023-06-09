import { StyleSheet } from "react-native";

const base_style =StyleSheet.create({
    container: {
        padding: 8,
        margin: 8,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
    },
    button_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#005fbf',
    },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
        ...base_style.container,
        backgroundColor: 'white',
    },
    title: {
        ...base_style.title,
        color: '#005fbf',
    },
}),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
        ...base_style.container,
        backgroundColor: '#005fbf',
        borderColor: 'white',
        borderWidth: 1,
    },
    title: {
        ...base_style.title,
        color: 'white',
    },
}),
};