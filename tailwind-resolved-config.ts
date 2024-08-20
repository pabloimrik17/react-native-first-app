import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "./tailwind.config";

export const tailwindResolvedConfig = resolveConfig(tailwindConfig);
