import { TextInput, TouchableOpacity, View, Text } from "react-native"
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from "./style"
import { firebase } from "../firebase/config"
import { v1 as uuid } from 'uuid'

export default function Signup() {

    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const Join = () => {
        const id = uuid()
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            firebase.firestore().collection("users").doc(id).set({
                id: id,
                user: user,
                email: email
            })
                .then(() => {
                    alert("Welcome " + user)
                })
                .catch(error => {
                    alert("Sum Ting Wong")
                    console.log(error)
                })
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <View style={styles.secondpage}>
            <KeyboardAwareScrollView>
                <Text style={styles.titleText2}>
                    Join the Movement
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    onChangeText={(text) => setUser(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    onChangeText={(text) => setEmail(text)}
                />

                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={Join}
                >
                    <Text style={styles.mediumText}>Sign Up</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}