import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "@/api/movie";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["movies", id],
    queryFn: () => fetchMovieDetails(id),
  });

  if (isLoading) return <ActivityIndicator />;

  if (error) return <Text>{error.message}</Text>;
  return (
    <View>
      <Text>{data.title}</Text>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
