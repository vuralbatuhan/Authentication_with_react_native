import React, {useState} from "react";
import { View, TextInput } from "react-native";
import Button from "../Button"
import Modal from "react-native-modal";
import styles from './ContentInputModal.style';

const ContentInputModal = ({visible, onClose, onSend}) => {
    const [text, setText] = useState("");

    const handleSend = () => {
        if(!text){
            return;
        }

        onSend(text);
        setText("");
    }
    return(
        <Modal style={styles.modal}
        isVisible={visible}
        swipeDirection= 'down'
        onSwipeComplete={onClose} 
        onBackdropPress={onClose}
        onBackButtonPress={onClose}>
        <View style={styles.container}>
            <View style={styles.input_container}>
            <TextInput 
            placeholder="yapme be..." 
            onChangeText={setText}
            multiline/>
            </View>
            <Button text="Gönder" onPress={handleSend}/>
        </View>
        </Modal>
    )
};

export default ContentInputModal;