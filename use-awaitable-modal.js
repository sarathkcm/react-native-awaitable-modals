import { useRef, useState } from "react";
import { Modal, View } from "react-native";

export const useAwaitableModal = (renderModal) => {
  const [isVisible, setIsVisible] = useState(false);

  const promiseRef = useRef({
    resolve: () => {},
    reject: () => {},
    params: {},
  });

  const renderModalFinal = () => {
    const closeWithError = (error) => {
      promiseRef.current.reject(error);
      setIsVisible(false);
    };

    const closeWithResult = (result) => {
      promiseRef.current.resolve(result);
      setIsVisible(false);
    };

    return (
      <Modal visible={isVisible} style={{ flex: 1 }} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {renderModal(
            {
              isVisible,
              closeWithError,
              closeWithResult,
            },
            promiseRef.current.params
          )}
        </View>
      </Modal>
    );
  };

  const openModal = (params) => {
    return new Promise((resolve, reject) => {
      promiseRef.current = {
        resolve,
        reject,
        params,
      };
      setIsVisible(true);
    });
  };
  return {
    openModal,
    renderModal: renderModalFinal,
  };
};
