import { View } from "react-native";

export function Screen({ children }) {
  return <View className="flex-1 bg-black pt-3 px-2">{children}</View>;
  //   return <View className="flex-1 bg-black">{children}</View>;
}
