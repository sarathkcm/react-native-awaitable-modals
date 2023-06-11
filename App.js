import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAwaitableModal } from "./use-awaitable-modal";
import { Button } from "react-native";
import {
  ModalWithParams,
  ModalWithStateValues,
  SimpleModal,
} from "./modal-examples";

export default function App() {
  const [resultText, setResultText] = useState("");
  const [paramText, setParamText] = useState("Initial state value");

  const { openModal, renderModal } = useAwaitableModal((modal) => (
    <SimpleModal modal={modal} />
  ));

  const { openModal: openModalWithParams, renderModal: renderModalWithParams } =
    useAwaitableModal((modal, params) => (
      <ModalWithParams modal={modal} params={params} />
    ));
  const { openModal: openModalWithState, renderModal: renderModalWithState } =
    useAwaitableModal((modal, params) => (
      <ModalWithStateValues modal={modal} title={paramText} />
    ));

  return (
    <>
      {renderModal()}
      {renderModalWithParams()}
      {renderModalWithState()}
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.buttonContainer}>
          <Text style={styles.tHeading}>Awaitable Modal Demos</Text>
          <Button
            onPress={async () => {
              try {
                setResultText("");
                const result = await openModal();
                setResultText(result);
              } catch (error) {
                setResultText(error);
              }
            }}
            title="Open Simple Modal"
          >
            Show
          </Button>
          <Button
            onPress={async () => {
              try {
                setResultText("");
                const result = await openModalWithParams({
                  title: "Hello world",
                });
                setResultText(result);
              } catch (error) {
                setResultText(error);
              }
            }}
            title="Open Modal With Params"
          />
          <Button
            onPress={async () => {
              try {
                setResultText("");
                setParamText("Initial sate value");
                setTimeout(
                  () => setParamText("Changed state value via timeout"),
                  2000
                );
                const result = await openModalWithState();
                setResultText(result);
              } catch (error) {
                setResultText(error);
              }
            }}
            title="Open Modal With State Values"
          />
          <Text style={styles.tResult}>
            Result: {resultText ? resultText : "Awaiting Result"}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    height: 200,
    justifyContent: "space-between",
  },
  tHeading: { fontSize: 21, fontWeight: "bold", color: "green" },
  tResult: { fontSize: 14, fontWeight: "bold", color: "blue" },
});
