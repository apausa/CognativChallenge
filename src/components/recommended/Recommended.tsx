import React from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRecoilValue } from 'recoil';

import renderRecommendation from '../../recoil/actions/recommendationCreator';
import styles from "../../screens/home/homeStyles";
import { Recipe } from "../../types/interface";
import imageUrl from "../../utils/imageUrl";

const Recommended: React.FC<any> = () => {
  const recommendations = useRecoilValue(renderRecommendation);
  const renderImageBox = (item: Recipe) => (
    <Image
      source={{ uri: imageUrl(item) }}
      style={styles.scrollerRecipe}
    />
  );
  return (
    <View style={styles.recommendedContainer}>
      <Text style={styles.header}>Recommended</Text>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroller}
      >
        {recommendations.map((item: Recipe) => (
          <TouchableOpacity>
            <View style={styles.recipeImageBox}>{renderImageBox(item)}</View>
          </TouchableOpacity>
        ),
        )}
      </ScrollView>
    </View>
  )
}

export default Recommended;
