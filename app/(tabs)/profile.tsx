import { View, Text } from "react-native";
import React, { FC } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";

 export default function Profile ()  {
    return (
        <ParallaxScrollView headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
                            headerImage={<Ionicons size={310} name="code-slash"/>}>
            <ThemedView>
                <ThemedText>Profile</ThemedText></ThemedView></ParallaxScrollView>
    )
}

