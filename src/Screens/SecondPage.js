import { TouchableOpacity, View, Text } from "react-native"
import React from 'react'
import { styles } from "./style"

export const SecondPage = ({navigation}) => {
    return (
        <View style={styles.secondpage}>
            <Text style={styles.largText}>Do you now understand what is happening</Text>
        </View>
    )
}