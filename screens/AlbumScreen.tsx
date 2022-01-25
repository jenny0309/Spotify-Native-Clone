import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import SongListItem from "../components/SongListItem";
import AlbumHeader from "../components/AlbumHeader";
import albumDetails from "../data/albumDetails";

const AlbumScreen = () => {
  const route = useRoute(); // get variables from navigation <- navigation.navigate("AlbumScreen", {id: props.album.id});

  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <View>
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />} // arrow function?
      />
    </View>
  );
};

export default AlbumScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
