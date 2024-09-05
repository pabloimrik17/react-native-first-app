import { FC } from "react";
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from "react-native";

export type TextInputProps = NativeTextInputProps;

export const TextInput: FC<TextInputProps> = (props) => {
  return (
    <NativeTextInput
      {...props}
      className={"flex-1 text-white font-psemibold text-base"}
      placeholderTextColor={"#7b7b8b"}
    />
  );
};
