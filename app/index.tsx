import { CustomButton } from "@/components/custom-button";
import { images } from "@/constants";
import { tailwindResolvedConfig } from "@/tailwind-resolved-config";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App: FC = () => {
  return (
    <SafeAreaView className={"bg-primary h-full"}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className={"w-full justify-center items-center h-[85vh] px-4"}>
          <Image
            source={images.logo}
            className={"w-[130px] h-[84px]"}
            resizeMode={"contain"}
          />
          <Image
            source={images.cards}
            className={"max-w--[380px] w-full h-[300px]"}
            resizeMode={"contain"}
          />
          <View className={"relative mt-5"}>
            <Text className={"text-3xl text-white font-bold text-center"}>
              Discover Endless Possibilietes with{" "}
              <Text className={"text-secondary-200"}>Aora</Text>
            </Text>
            <Image
              source={images.path}
              className={"w-[136px] h-[15px] absolute -bottom-2 -right-8"}
              resizeMode={"contain"}
            />
          </View>
          <Text
            className={"text-sm font-pregular text-gray-100 mt-7 text-center"}
          >
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            onPress={() => router.push("/sign-in")}
            classNames={{
              container: "w-full mt-7",
            }}
          >
            Continue with email
          </CustomButton>
        </View>
      </ScrollView>
      <StatusBar
        backgroundColor={
          tailwindResolvedConfig?.theme?.colors?.primary as string
        }
        style={"light"}
      />
    </SafeAreaView>
  );
};

export default App;
