import { images } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

const SignInFormValues = z.object({
  email: z.string().email(),
  password: z.string().trim().min(5),
});

type SignInFormValues = z.infer<typeof SignInFormValues>;

const SignIn: FC = () => {
  const {} = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInFormValues),
  });

  return (
    <SafeAreaView className={"bg-primary h-full"}>
      <ScrollView>
        <View className={"w-full justify-center h-full px-4 my-6"}>
          <Image
            source={images.logo}
            resizeMode={"contain"}
            className={"w-[115px] h-[35px]"}
          />
          <Text
            className={"text-2xl text-white text-semibold mt-10 font-psemibold"}
          >
            Log in to Aora
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
