import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const PlayerWidget = () => {
  const song = {
    id: "1",
    imageUri:
      "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
    title: "High on You",
    artist: "Clara",
  };

  return (
    <View style={styles.container}>
      <View>
        {/* Image cover */}
        <Image source={{ uri: song.imageUri }} style={styles.image} />
      </View>

      <View style={styles.rightContainer}>
        <View style={styles.namesContainer}>
          {/* Title */}
          <Text style={styles.title}>{song.title}</Text>

          {/* Artist */}
          <Text style={styles.artist}>・{song.artist}</Text>
        </View>

        {/* Icons */}
        <View style={styles.iconsContainer}>
          <AntDesign name="hearto" size={30} color={"white"} />
          <FontAwesome name="play" size={30} color={"white"} />
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 79,
    backgroundColor: "#131313",
    flexDirection: "row",
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 0,
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 15,
  },
  namesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  artist: {
    color: "lightgray",
    fontSize: 18,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    justifyContent: "space-around",
  },
});
