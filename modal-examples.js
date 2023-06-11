import { Text, TextInput, View, StyleSheet } from "react-native";
import ModalContainer from "./modal-container";
import { Button } from "react-native";
import { useState } from "react";

export const SimpleModal = ({ modal }) => {
  return (
    <ModalContainer>
      <Text style={styles.tHeading}>Simple Modal</Text>
      <Text style={styles.tMargin}>Here is some information</Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => modal.closeWithError("Cancelled")}
          title="Cancel"
        />
        <View style={{ width: 20 }}></View>
        <Button onPress={() => modal.closeWithResult("Success")} title="OK" />
      </View>
    </ModalContainer>
  );
};

export const ModalWithParams = ({ modal, params }) => {
  const [input, setInput] = useState("");
  return (
    <ModalContainer>
      <Text style={styles.tHeading}>
        Modal with Parametes passed to it when opened
      </Text>
      <Text style={styles.tMargin}>Here is some information</Text>
      <Text style={styles.tMargin}>
        Here are the parameters passed when opening: {params?.title}
      </Text>
      <Text style={styles.tMargin}>Enter Some Text:</Text>
      <TextInput
        value={input}
        onChangeText={(text) => setInput(text)}
        style={{ borderWidth: 1 }}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => modal.closeWithError("Cancelled")}
          title="Cancel"
        />
        <View style={{ width: 20 }}></View>
        <Button
          onPress={() =>
            modal.closeWithResult(`Entered Text: ${input || "No text entered"}`)
          }
          title="OK"
        />
      </View>
    </ModalContainer>
  );
};
export const ModalWithStateValues = ({ modal, title }) => {
  return (
    <ModalContainer>
      <Text style={styles.tHeading}>Modal with State Values</Text>
      <Text style={styles.tMargin}>
        The Following text is rendered from a state variable in the parent page:
      </Text>
      <Text style={styles.tHighlight}>{title}</Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => modal.closeWithError("Cancelled")}
          title="Cancel"
        />
        <View style={{ width: 20 }}></View>
        <Button onPress={() => modal.closeWithResult("Success")} title="OK" />
      </View>
    </ModalContainer>
  );
};

const styles = StyleSheet.create({
  tMargin: {
    marginVertical: 5,
  },
  tHeading: { fontSize: 18, fontWeight: "bold" },
  tHighlight: {
    fontSize: 14,
    fontWeight: "500",
    color: "red",
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 10,
  },
});
