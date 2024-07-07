import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";

import { View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { fetchTopRatedMovies } from "@/api/movie";
import { useQuery } from "@tanstack/react-query";
import MovieListItem from "@/components/MovieListItem";

export default function TabOneScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchTopRatedMovies,
  });

  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     setLoading(true);

  //     try {
  //       const movies = await fetchTopRatedMovies();
  //       setMovies(movies);
  //     } catch(error) {
  //       setError(error);
  //     }

  //     setLoading(false);
  //   };
  //   fetchMovies();
  // }, []);

  if (isLoading) return <ActivityIndicator />;

  if (error) return <Text>{error.message}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        contentContainerStyle={{gap:5,padding:5}}
        columnWrapperStyle={{gap:5}}
        renderItem={({ item }) => <MovieListItem movie={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
