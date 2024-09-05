import { clsx } from "clsx";
import React, { ReactElement } from "react";
import {
  ControllerFieldState,
  ControllerRenderProps,
  useController,
  UseFormStateReturn,
} from "react-hook-form";
import { Control, FieldPath, FieldValues } from "react-hook-form/dist/types";
import { Text, View } from "react-native";

export interface FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  control: Control<TFieldValues>;
  name: TName;
  render: ({
    field,
    fieldState,
    formState,
  }: {
    field: ControllerRenderProps<TFieldValues, TName>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<TFieldValues>;
  }) => React.ReactElement;
  label?: string;
  placeholder?: string;
  otherClassNames?: string;
}

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormFieldProps<TFieldValues, TName>,
): ReactElement => {
  const { field, fieldState, formState } = useController({
    control: props.control,
    name: props.name,
  });

  const viewClassNames = clsx("space-y-2", props.otherClassNames);

  return (
    <View className={viewClassNames}>
      <Text className={"text-base text-gray-100 font-psemibold"}>
        {props.label}
      </Text>
      <View
        className={
          "border-2 border-black-500 w-full, h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row"
        }
      >
        {props.render({ field, fieldState, formState })}
      </View>
    </View>
  );
};
