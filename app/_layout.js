import { Link, Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, View, StyleSheet } from "react-native";

import { Logo } from "../components/Logo";
import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <View style={styles.iconContainer}>
              <Link asChild href="/about">
                {/* <Pressable hitSlop={1000}> */}
                <Pressable hitSlop={1000}>
                  <CircleInfoIcon />
                </Pressable>
              </Link>
            </View>
          ),
        }}
      />
      {/* </Stack> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  iconContainer: {
    paddingRight: 15,
  },
  pressable: {
    padding: 10,
  },
});
