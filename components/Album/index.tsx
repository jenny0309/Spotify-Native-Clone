import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Album } from "../../types";

export type AlbumProps = {
  album: Album;
};

const AlbumComponent = (props: AlbumProps) => {
  // proceed to album screen if clicking component with useNavigation hook
  const navigation = useNavigation();

  const onPress = () => {
    // console.warn(`Album pressed: ${props.album.artistsHeadline}`);
    navigation.navigate("AlbumScreen", {id: props.album.id});
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: props.album.imageUri }} style={styles.image} />
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AlbumComponent;

const styles = StyleSheet.create({
  container: {
    width: 155,
    margin: 10,
  },
  image: {
    width: "100%",
    height: 155,
  },
  text: {
    color: "grey",
    marginTop: 10,
  },
});
