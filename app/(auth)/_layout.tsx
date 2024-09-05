import { tailwindResolvedConfig } from "@/tailwind-resolved-config";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FC } from "react";

const AuthLayout: FC = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name={"sign-in"}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"sign-up"}
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar
        backgroundColor={
          tailwindResolvedConfig?.theme?.colors?.primary as string
        }
        style={"light"}
      />
    </>
  );
};

export default AuthLayout;
