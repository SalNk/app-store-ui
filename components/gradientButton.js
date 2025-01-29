import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function GradientButton(props) {
    return (
        <LinearGradient
            colors={['rgba(9, 181, 211, 0.4)', 'rgba(58, 131, 244,0.4)']}
            end={{ x: 1, y: 1 }}
            start={{ x: 0.1, y: 0.2 }}
            className={`rounded-full ${props.containerClass}`}
            style={{ borderRadius: 30 }}
        >
            <TouchableOpacity className={`p-3 px-4 ${props.buttonClass}`}>
                <Text className="text-white font-bold">
                    {props.value}
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}