import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  StatusBar,
  Pressable,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { useRouter } from "expo-router";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from "react-native-reanimated";
import { useGlobal } from "@/context/GloabalContext";

export default function Index() {
  const router = useRouter();
   const {username,setUserName, password,setPassword} = useGlobal()
  const [isSecure, setIsSecure] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const showPassword = () => {
    setIsSecure(!isSecure);
  };

  const handleLogin = () => {
    setErrorMessage("");

    // Validate input
    if (!username || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    // Basic password length check
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
      
    }else{
      router.replace('/home')
    }
  };

  const gotoSignUp = () => {
    router.replace("/singup"); 
  };

  const handleForgotPassword = () => {
    router.push('/forgotpassword')
  
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        style={styles.contents}
      >
        <ScrollView
          contentContainerStyle={{ justifyContent: "center" }}
          showsVerticalScrollIndicator={false}
          style={styles.scrollContent}
        >
          <Animated.Image
            entering={FadeInUp.duration(600)}
            style={{
              height: 300,
              width: "100%",
              alignSelf: "center",
              resizeMode: "contain",
            }}
            source={require("../assets/images/loginicon.jpg")}
          />
          
          <Animated.Text
            entering={FadeInDown.duration(600)}
            style={styles.title}
          >
            Login
          </Animated.Text>

          <Animated.Text
            entering={FadeInLeft.duration(300)}
            style={styles.titleDesc}
          >
            Please log in to continue
          </Animated.Text>

          <View style={styles.inputContents}>
            {/* Error message display */}
            {errorMessage ? (
              <Animated.View entering={FadeInDown.duration(300)}>
                <Text style={styles.errorText}>{errorMessage}</Text>
              </Animated.View>
            ) : null}

            <Animated.View
              entering={FadeInLeft.duration(600)}
              style={styles.inputContainer}
            >
              <Ionicons name="person-outline" size={20} color="black" />
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="gray"
                value={username}
                onChangeText={setUserName}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </Animated.View>

            <Animated.View
              entering={FadeInRight.duration(800)}
              style={styles.inputContainer}
            >
              <Ionicons name="lock-closed-outline" size={20} color="black" />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry={isSecure} 
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity onPress={showPassword}>
                <Ionicons
                  name={isSecure ? "eye-outline" : "eye-off-outline"}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </Animated.View>
          </View>

          <View style={styles.forgotPasswordContainer}>
            <Pressable onPress={handleForgotPassword}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </Pressable>
          </View>

          <Animated.View entering={FadeInUp.duration(700)}>
            <TouchableOpacity onPress={handleLogin} style={styles.btn}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </Animated.View>

          <View style={styles.signupContent}>
            <Text style={styles.signup}>Don't have an account?</Text>
            <Pressable onPress={gotoSignUp}>
              <Text
                style={[
                  styles.signup,
                  {
                    color: "#0000cd",
                    fontWeight: "600",
                    fontFamily: "semiBold",
                  },
                ]}
              >
                {" "}
                Sign up
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollContent: {
    flexGrow: 1,
  },
  contents: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    color: "#4682B4", // Changed to a nice blue color
    fontSize: 35,
    fontFamily: "Bold",
    fontWeight: "bold",
    textAlign: "center",
  },
  titleDesc: {
    fontSize: 13,
    fontFamily: "semiBold",
    color: "gray",
    textAlign: "center",
    marginBottom: 10,
  },
  inputContents: {
    marginTop: 20,
  },
  errorText: {
    fontSize: 13,
    fontFamily: "Medium",
    color: "red",
    textAlign: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    backgroundColor: "#f5f5f5", // Better color than "lightgray"
    borderRadius: 20,
    gap: 5,
    marginVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  input: {
    flex: 1,
    fontWeight: "500", // Reduced from 700 for better readability
    fontSize: 16,
  },
  forgotPasswordContainer: {
    marginTop: 5,
    alignItems: "flex-end",
  },
  forgotPassword: {
    color: "#0000cd",
    fontFamily: "semiBold",
    fontWeight: "600",
  },
  btn: {
    marginTop: 20,
    width: "100%",
    padding: 15, // Increased padding for better touch target
    backgroundColor: "#0000cd",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    color: "white",
    fontFamily: "Bold", 
    fontSize: 18,
  },
  signupContent: { 
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  signup: {
    fontSize: 15,
    color: "gray",
    fontFamily: "Medium",
    textAlign: "center",
  },
});