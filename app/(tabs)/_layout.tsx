import { tailwindResolvedConfig } from "@/tailwind-resolved-config";
import { Tabs } from "expo-router";
import React, { FC } from "react";
import { Image, Text, View } from "react-native";
import { ImageRequireSource } from "react-native/Libraries/Image/ImageSource";
import { icons } from "../../constants";

interface TabIconProps {
  icon: ImageRequireSource;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon: FC<TabIconProps> = (props) => {
  return (
    <View className={"items-center justify-center gap-2"}>
      <Image
        source={props.icon}
        resizeMode="contain"
        tintColor={props.color}
        className={"w-6 h-6"}
      />
      <Text
        className={`${props.focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: props.color }}
      >
        {props.name}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: tailwindResolvedConfig.theme?.colors
          ?.secondary?.["100"] as string,
        tabBarInactiveTintColor:
          tailwindResolvedConfig.theme?.colors?.gray?.["100"],
        tabBarStyle: {
          backgroundColor: tailwindResolvedConfig.theme?.colors
            ?.primary as string,
          borderTopWidth: 1,
          borderTopColor: tailwindResolvedConfig.theme?.colors?.black?.[
            "200"
          ] as string,
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name={"Home"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name={"Bookmark"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name={"Create"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name={"Profile"}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
