import { TextInput, TouchableOpacity, View, Text } from "react-native"
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from "./style"
import { firebase } from "../firebase/config"

export default function Login({navigation}) {

    const [email, setUser] = useState("")
    const [password, setPassword] = useState("")

    const Enter = () =>{
        firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
            alert("Welcome Back!!!")
        }).catch(error=>{
            alert("Sum Ting Wong")
            console.log(error)
        })
    }

    return (
        <View style={styles.firstpage}>
            <KeyboardAwareScrollView>

                <Text style={styles.titleText1}>
                    Welcome to le practice application
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    onChangeText={(text)=> setUser(text)}
                />

                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text)=> setPassword(text)}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={Enter}
                >
                    <Text style={styles.mediumText}>Log In</Text>
                </TouchableOpacity>

                <Text style={styles.text}>Don't have an account? Might as well <Text onPress={()=> navigation.navigate("Signup")} style={styles.linkText}>Sign Up</Text></Text>

            </KeyboardAwareScrollView>
        </View>
    )
}