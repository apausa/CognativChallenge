/* eslint-disable no-console */
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import styles from "../../screens/home/homeStyles";
import imageUrl from "../../utils/imageUrl";
import { ColumnInterface } from "../../types/interface";

const Column: React.FC<any> = ({ item, navigation }: ColumnInterface) => {
  const image = imageUrl(item);
  const {
    _id,
    categoryName,
    name,
    duration,
    complexity,
    people,
  } = item;
  return (
    <TouchableOpacity>
      <TouchableOpacity 
        style={styles.rowContainer}
        onPress={() => navigation.push('Details', { itemId: _id })}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.recipeImage}/>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.categoryRow}>{categoryName}</Text>
          <Text style={styles.titleRow}>{name}</Text>
          <View style={styles.properties}>
            <View style={styles.cellRow}>
              <Text style={styles.cellText}>{duration} minutes</Text>
            </View>
            <View style={styles.cellRow}>
              <Text style={styles.cellText}>{complexity}</Text>
            </View>
            <View style={styles.cellRow}>
              <Text style={styles.cellText}>{people} people</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default Column;
