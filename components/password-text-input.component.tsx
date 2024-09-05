import { TextInput, TextInputProps } from "@/components/text-input.component";
import { icons } from "@/constants";
import { FC, useState } from "react";
import { Image, TouchableOpacity } from "react-native";

export type PasswordTextInputProps = TextInputProps;

export const PasswordTextInput: FC<PasswordTextInputProps> = (props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <TextInput {...props} secureTextEntry={!showPassword} />
      <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
        <Image
          source={!showPassword ? icons.eye : icons.eyeHide}
          className={"w-6 h-6"}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </>
  );
};
