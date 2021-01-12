import React, {FC, useState} from 'react';
import {
  Button,
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  KeyboardAvoidingView,
  Platform,
  Pressable
} from 'react-native';
import {saveWeight} from '../../data/helpers';
import {primaryColor} from '../styles';
import {creatorStyles} from './styles';

const Creator: FC<{
  isCreatorVisible: boolean;
  onHideCreator: () => void;
}> = ({onHideCreator, isCreatorVisible}) => {
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [weight, setWeight] = useState<string>('');
  const [note, setNote] = useState<string>('');

  const handleSavePress = async () => {
    setIsSaving(true);
    await saveWeight({weight, note});
    // hide modal
    onHideCreator();
    // Clear out the inputs
    setWeight('');
    setNote('');
    // Make button active again
    setIsSaving(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isCreatorVisible}>
      <KeyboardAvoidingView style={creatorStyles.centeredView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Pressable style={{flex:1, justifyContent: 'flex-end'}} onPress={() => onHideCreator()}>
          <View style={creatorStyles.modalView}>
              <View style={creatorStyles.topActions}>
                <Text>Add your weight</Text>
                <TouchableHighlight
                  onPress={() => {
                    onHideCreator();
                  }}>
                  <Text style={creatorStyles.topCloseButton}>×</Text>
                </TouchableHighlight>
              </View>
              <TextInput
                style={creatorStyles.input}
                placeholder="Your weight"
                keyboardType="decimal-pad"
                onChangeText={(text) => setWeight(text)}
                value={weight}
              />
              <TextInput
                placeholder="Additional note (optional)"
                style={creatorStyles.input}
                onChangeText={(text) => setNote(text)}
                value={note}
              />
              <Button
                title="Save"
                disabled={isSaving}
                color={primaryColor}
                onPress={handleSavePress}
              />
            </View>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default Creator;