import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ImageBackground, Image, ScrollView, Platform } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const onLogin = () => {
    if (!email && !password) {
      Alert.alert("Username & Password Tidak Boleh Kosong!");
    } else if (!email) {
      Alert.alert("Username Tidak Boleh Kosong!");
    } else if (!password) {
      Alert.alert("Password Tidak Boleh Kosong!");
    } else {
      Alert.alert("Logged in...!");
      navigation.navigate("Products");
    }
  };

  return (
    <ImageBackground style={styles.imageBackground}>
      <Image source={require("../assets/images/logo.png")} style={styles.image} />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""} style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} style={styles.input} />

          <TextInput placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} style={styles.input} secureTextEntry />

          <TouchableOpacity
            onPress={() => {
              onLogin();
            }}
            style={styles.buttonLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -250,
  },
  imageBackground: {
    flex: 1,
  },
  image: {
    marginHorizontal: 50,
    marginTop: 10,
    width: "75%",
    height: "50%",
    marginBottom: -200,
  },
  inputContainer: {
    width: "70%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLogin: {
    backgroundColor: "#0782F9",
    width: "70%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 50,
    marginBottom: 80,
  },
  buttonRegister: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
  paragrafDaftar: {
    color: "black",
    marginBottom: 10,
    fontSize: 16,
  },
});
