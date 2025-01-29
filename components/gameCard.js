import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ArrowDownTrayIcon, HeartIcon } from 'react-native-heroicons/solid'
import { storeColors } from '../theme';
// import StarRating from 'react-native-star-rating';
import { Rating } from 'react-native-ratings';

export default function GameCard({ game }) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <View className="mr-4 relative">
            <Image
                source={game.image}
                className="w-80 h-60"
                style={{ borderRadius: 24 }}
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.6)']}
                className="absolute p-4 h-full w-full flex justify-between rounded-3xl"
                style={{ borderRadius: 24 }}
            >
                <View className="flex-row justify-end">
                    <TouchableOpacity
                        onPress={() => setIsFavorite(!isFavorite)}
                        className="p-2 rounded-full"
                        style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
                    >
                        <HeartIcon color={isFavorite ? storeColors.redHeart : 'white'} size={20} />
                    </TouchableOpacity>
                </View>

                <View className="gap-y-1">
                    <Text className="text-xl font-bold text-gray-300">
                        {game.title}
                    </Text>
                    <View className="flex-row items-center gap-x-2">
                        <ArrowDownTrayIcon color="lightgray" size={18} />
                        <Text className="text-sm text-gray-300 font-semibold">
                            {game.downloads} Downloads
                        </Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}