import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { Bars3CenterLeftIcon, BellIcon } from 'react-native-heroicons/solid'
import { storeColors } from '../theme'
import GradientButton from '../components/gradientButton'
import GameCard from '../components/gameCard'

const categories = ['Action', 'Family', 'Puzzle', 'Adventure', 'Racing', 'Education', 'Others'];

export default function StoreScreen() {

    const [activeCategory, setActiveCategory] = useState('Action');

    const featured = [
        {
            id: 1,
            title: 'Zooba',
            image: require('../assets/images/zooba.png'),
            downloads: '200k',
            stars: 4
        },
        {
            id: 2,
            title: 'Subway Surfer',
            image: require('../assets/images/subway.png'),
            downloads: '5M',
            stars: 4
        },
        {
            id: 3,
            title: 'Free Fire',
            image: require('../assets/images/freeFire.png'),
            downloads: '100M',
            stars: 3
        },

        {
            id: 4,
            title: "Alto's Adventure",
            image: require('../assets/images/altosAdventure.png'),
            downloads: '20k',
            stars: 4
        },
    ]

    const games = [
        {
            id: 1,
            title: 'Shadow Fight',
            image: require('../assets/images/shadowFight.png'),
            downloads: '20M',
            stars: 4.5
        },
        {
            id: 2,
            title: 'Valor Arena',
            image: require('../assets/images/valorArena.png'),
            downloads: '10k',
            stars: 3.4
        },
        {
            id: 3,
            title: 'Frag',
            image: require('../assets/images/frag.png'),
            downloads: '80k',
            stars: 4.6
        },
        {
            id: 4,
            title: "Zooba Wildlife",
            image: require('../assets/images/zoobaGame.png'),
            downloads: '40k',
            stars: 3.5
        },
        {
            id: 4,
            title: "Clash of Clans",
            image: require('../assets/images/clashofclans.png'),
            downloads: '20k',
            stars: 4.2
        },
    ];

    return (
        <LinearGradient
            colors={['rgba(58, 131, 244,0.4)', 'rgba(9, 181, 211, 0.4)']}
            className="w-full flex-1">
            <SafeAreaView>
                <View className="container">
                    <View className="flex-row justify-between items-center px-4">
                        <Bars3CenterLeftIcon color={storeColors.text} size={30} />
                        <BellIcon color={storeColors.text} size={30} />
                    </View>

                    {/* Categories */}
                    <View className="mt-3 gap-y-4">
                        <Text
                            style={{ color: storeColors.text }}
                            className="ml-4 text-3xl font-bold"
                        >
                            Browse Games
                        </Text>
                        <View className="pl-4">
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {
                                    categories.map(cat => {
                                        if (cat == activeCategory) {
                                            return (
                                                <GradientButton
                                                    key={cat}
                                                    value={cat}
                                                    containerClass="mr-2"
                                                />
                                            )
                                        } else {
                                            return (
                                                <TouchableOpacity
                                                    onPress={() => setActiveCategory(cat)}
                                                    key={cat}
                                                    className="bg-blue-200 p-3 px-4 rounded-full mr-2">
                                                    <Text>{cat}</Text>
                                                </TouchableOpacity>
                                            )
                                        }
                                    })
                                }
                            </ScrollView>
                        </View>
                    </View>

                    {/* Featured row */}
                    <View className="mt-3 gap-y-4">
                        <Text
                            style={{ color: storeColors.text }}
                            className="ml-4 text-lg font-bold"
                        >
                            Featured Games
                        </Text>
                        <View className="pl-3">
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {
                                    featured.map((item, index) => {
                                        return (
                                            <GameCard game={item} key={index} />
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}