import React, { useContext, useState } from "react";

import { Text, View, Image, SafeAreaView } from "react-native";
import { Styles } from "../components/Styles";
import TextButton from "../components/TextButton";

function FinishTask({ navigation }) {
  const finalTask = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "ListTasks" }],
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#6C98F0" }}>
      <SafeAreaView style={Styles.safeview}>
        <View style={Styles.viewHeader}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Finalizado !</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 150,
          }}
        >
          <Image
            source={require("../../assets/Rectangle.png")}
            style={Styles.imageExit}
          />
          <Text style={{ marginTop: 20, fontSize: 25, fontWeight: "bold" }}>
            Tarefa adicionada !
          </Text>
        </View>
        <View style={{ marginTop: 100, alignItems: "center" }}>
          <TextButton style={Styles.btnExit} title="SAIR" onPress={finalTask} />
        </View>
      </SafeAreaView>
    </View>
  );
}
export default FinishTask;
