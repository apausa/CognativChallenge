/* eslint-disable no-console */
import React from "react";
import styles from "./detailsStyles";
import { useRecoilValue } from 'recoil';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";

import { DetailsInterface } from "../../types/interface";
import renderDetails from '../../recoil/detailsSelector';
import imageUrl from "../../utils/imageUrl";

export default function Details({ route }: DetailsInterface) {
  const { params: { itemId }} = route;
  const recipe = useRecoilValue(renderDetails(itemId));
  const image = imageUrl(recipe);
  const {
    categoryName,
    name,
    duration,
    complexity,
    people,
    ingredients,
    description,
  } = recipe;

  return (
    <SafeAreaView style={styles.mainScreen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.recipeImage} />
            <View style={styles.darkener} />
          </View>
          <View>
            <Text style={styles.category}>{categoryName}</Text>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.properties}>
              <View style={styles.cell}>
                <Text style={styles.cellText}>{duration} minutes</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.cellText}>{complexity}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.cellText}>{people} people</Text>
              </View>
            </View>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.header}>Ingredients</Text>
            <Text style={styles.description}>{ingredients}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.header}>Info</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
