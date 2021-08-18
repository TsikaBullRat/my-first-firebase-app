import { TouchableOpacity, View, Text } from "react-native"
import React from 'react'
import { styles } from "./style"
import { SecondPage } from "./SecondPage"

export const FirstPage = ({navigation}) =>{
    return(
        <View style={styles.firstpage}>
            <Text style={styles.largText}>Hi Tsika :)</Text>
            <Text style={styles.mediumText}> Join me as we navigate through life</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>navigation.navigate('Second')}
            >
                <Text style={styles.arrow}>{">"}</Text>
            </TouchableOpacity>
        </View>
    )
}