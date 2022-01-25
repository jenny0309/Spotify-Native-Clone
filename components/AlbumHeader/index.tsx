import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Album } from "../../types";

export type AlbumHeaderProps = {
  album: Album;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const { album } = props;

  return (
    <View style={styles.container}>
      {/* Cover image */}
      <Image source={{ uri: album.imageUri }} style={styles.image} />

      {/* Name */}
      <Text style={styles.name}>{album.name}</Text>

      {/* Creater  Number of Likes */}
      <View style={styles.creatorContainer}>
        <Text style={styles.creator}>By {album.by}</Text>
        <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
      </View>

      {/* Play button */}
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  name: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
  creatorContainer: {
    flexDirection: "row",
  },
  creator: {
    color: "lightgray",
    margin: 5,
    fontSize: 18,
  },
  likes: {
    color: "lightgray",
    margin: 5,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#1CD05D",
    height: 60,
    width: 180,
    borderRadius: 50,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
