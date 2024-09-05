import { CustomButton } from "@/components/custom-button";
import { FormField } from "@/components/form-field";
import { PasswordTextInput } from "@/components/password-text-input.component";
import { TextInput } from "@/components/text-input.component";
import { images } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { FC, ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

const SignInFormValues = z.object({
  email: z.string().email(),
  password: z.string().trim().min(5),
});

type SignInFormValues = z.infer<typeof SignInFormValues>;

const SignIn: FC = () => {
  const { control, formState, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInFormValues),
  });

  const handleSignIn: SubmitHandler<SignInFormValues> = (values) => {
    console.log(values);
  };

  return (
    <SafeAreaView className={"bg-primary h-full"}>
      <ScrollView>
        <View className={"w-full justify-center min-h-[85vh] px-4 my-6"}>
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
          <FormField
            control={control}
            name={"email"}
            label={"Email"}
            otherClassNames={"mt-7"}
            render={({ field: { onChange, ...restField } }): ReactElement => (
              <TextInput {...restField} onChangeText={onChange} />
            )}
          />
          <FormField
            control={control}
            name={"password"}
            label={"Password"}
            otherClassNames={"mt-7"}
            render={({ field: { onChange, ...restField } }): ReactElement => (
              <PasswordTextInput {...restField} onChangeText={onChange} />
            )}
          />

          <CustomButton
            onPress={handleSubmit(handleSignIn)}
            isLoading={formState.isSubmitting}
            classNames={{
              container: "mt-7",
            }}
          >
            Sign in
          </CustomButton>

          <View className={"justify-center pt-5 flex-row gap-2"}>
            <Text className={"text-lg text-gray-100 font-pregular"}>
              Don`t have account?
            </Text>
            <Link
              href={"/sign-up"}
              className={"text-lg font-psemibold text-secondary"}
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
