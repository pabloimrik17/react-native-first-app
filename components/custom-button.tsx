import { clsx } from "clsx";
import { FC, PropsWithChildren } from "react";
import { Text, TouchableOpacity } from "react-native";

export interface CustomButtonProps {
  classNames?: {
    container?: string;
    text?: string;
  };
  onPress: () => void;
  isLoading?: boolean;
}

export const CustomButton: FC<PropsWithChildren<CustomButtonProps>> = (
  props,
) => {
  const containerClassNames = clsx(
    `bg-secondary rounded-xl min-h-[62px] justify-center items-center`,
    props.classNames?.container,
    {
      "opacity-50": props.isLoading,
    },
  );

  const textClassNames = clsx(
    `text-primary font-psemibold text-lg `,
    props.classNames?.text,
  );

  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.7}
      className={containerClassNames}
      disabled={props.isLoading}
    >
      <Text className={textClassNames}>{props.children}</Text>
    </TouchableOpacity>
  );
};
