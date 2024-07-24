import { View, Text } from "react-native";
import { FC } from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

 export const App: FC = () => {
    return (
        <View className={"flex-1 items-center justify-center bg-white"}>
            <Text className={"text-3xl font-pblack"}>
                Aora!
            </Text>
            <StatusBar style={"auto"}/>
            <Link href={"/profile"} style={{ color: "blue"}}>Go to Profile</Link>
            </View>
    )

}

export default App
