import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Song } from "../../types";

export type SongListItemProps = {
  song: Song;
};

const SongListItem = (props: SongListItemProps) => {
  const { song } = props;

  return (
    <View style={styles.container}>
      <View>
        {/* Image cover */}
        <Image source={{ uri: song.imageUri }} style={styles.image} />
      </View>

      <View style={styles.rightContainer}>
        {/* Title */}
        <Text style={styles.title}>{song.title}</Text>

        {/* Artist */}
        <Text style={styles.artist}>{song.artist}</Text>
      </View>
    </View>
  );
};

export default SongListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 15,
  },
  image: {
    width: 75,
    height: 75,
  },
  rightContainer: {
    justifyContent: "space-around",
    marginLeft: 15,
  },
  title: {
    color: "white",
    fontSize: 21,
  },
  artist: {
    color: "lightgray",
    fontSize: 18,
  },
});
