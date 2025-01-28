import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";
import { HomeIcon } from "../../components/Icons";

import { styled } from "nativewind";
import { Screen } from "../../components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StyledPressable className={`active:opacity-50`}>
            <HomeIcon />
          </StyledPressable>

          {/* <Pressable>
          {/* <Text className="text-blue-400 text-xl mt-20">Volver al inicio</Text>
          {/* <FontAwesome name="home" size={24} color="white" />

          {/* <HomeIcon />
          {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />}
        </Pressable> */}
        </Link>

        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>

        <Text className="text-white/90 mb-4">
          Reprehenderit culpa ut ipsum anim. Duis irure laboris minim aliquip
          officia nisi commodo pariatur labore ipsum est. Voluptate tempor irure
          nulla occaecat ad veniam dolore anim in. Aute elit anim labore commodo
          tempor consequat.
        </Text>
        <Text className="text-white/90 mb-4">
          Reprehenderit culpa ut ipsum anim. Duis irure laboris minim aliquip
          officia nisi commodo pariatur labore ipsum est. Voluptate tempor irure
          nulla occaecat ad veniam dolore anim in. Aute elit anim labore commodo
          tempor consequat.
        </Text>
        <Text className="text-white/90 mb-4">
          Reprehenderit culpa ut ipsum anim. Duis irure laboris minim aliquip
          officia nisi commodo pariatur labore ipsum est. Voluptate tempor irure
          nulla occaecat ad veniam dolore anim in. Aute elit anim labore commodo
          tempor consequat.
        </Text>
        <Text className="text-white/90 mb-4">
          Reprehenderit culpa ut ipsum anim. Duis irure laboris minim aliquip
          officia nisi commodo pariatur labore ipsum est. Voluptate tempor irure
          nulla occaecat ad veniam dolore anim in. Aute elit anim labore commodo
          tempor consequat.
        </Text>
        <Text className="text-white/90 mb-4">
          Reprehenderit culpa ut ipsum anim. Duis irure laboris minim aliquip
          officia nisi commodo pariatur labore ipsum est. Voluptate tempor irure
          nulla occaecat ad veniam dolore anim in. Aute elit anim labore commodo
          tempor consequat.
        </Text>
        <Text className="text-white/90 mb-4">
          Reprehenderit culpa ut ipsum anim. Duis irure laboris minim aliquip
          officia nisi commodo pariatur labore ipsum est. Voluptate tempor irure
          nulla occaecat ad veniam dolore anim in. Aute elit anim labore commodo
          tempor consequat.
        </Text>
      </ScrollView>
    </Screen>
  );
}
