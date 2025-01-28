import { useEffect, useState } from "react";
// import { Link } from "expo-router";
import { FlatList, ActivityIndicator, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// import { getLatestGames } from "./lib/metacritic";
import jsonGames from "../lib/mc.json";
import { AnimatedGameCard } from "./GameCard";
// import { Logo } from "./Logo";
// import { FontAwesome6 } from "@expo/vector-icons";
// import { CircleInfoIcon } from "./Icons";
import { Screen } from "./Screen";

// const icon = require("../assets/icon.png");

export function Main() {
  // Initial state. When the variable change its value
  // the component will be re-rendering
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  // Each time you change the dependencies or the first time you enter
  // this always will be executed when our components is rendering
  useEffect(() => {
    // getLatestGames().then((gms) => {
    //   setGames(gms);
    // });
    setGames(jsonGames);
  }, []);

  return (
    <Screen>
      {/* <View className="flex-row justify-between items-center m-4">
        <View>
          <Logo />
        </View> */}

      {/* <Link href="/about" className="text-blue-400 text-xl">
        Ir al about
      </Link> */}

      {/* <Link asChild href="/about">
          <Pressable>
            <CircleInfoIcon />
          </Pressable>
        </Link>
      </View> */}

      {games.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
        // {/* Only works efficient in static elements */}
        // <ScrollView>
        //   {games.map((game) => (
        //     <GameCard key={game.slug} game={game} />
        //   ))}
        // </ScrollView>
      )}

      {/* <Image source={icon} style={{ 
        width: 100, height: 100,
        resizeMode: 'center'
      }} /> */}
      {/* <Image
        source={{
          uri: "https://www.telemundo.com/sites/nbcutelemundo/files/images/gallery/2017/07/05/perro-de-raza-samoyedo-sobre-el-cesped-3.jpg",
        }}
        style={{
          width: 200,
          height: 100,
          resizeMode: "contain",
        }}
      />
      <Text>Open up App.js to start working on your app!</Text> */}

      {/* <Button title='Pulsa aquí' onPress={() => alert('Hola')} /> */}

      {/* <Pressable
        onPress={() => {}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text
            style={{
              fontSize: pressed ? 32 : 16,
            }}
          >
            {pressed ? "Pressed!" : "Press Me"}
          </Text>
        )}
      </Pressable> */}
    </Screen>
  );
}

// const styles = StyleSheet.create({});
