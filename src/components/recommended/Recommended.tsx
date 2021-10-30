import React from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRecoilValue } from 'recoil';

import renderRecommendation from '../../recoil/selectors/recommendationSelector';
import styles from "../../screens/home/homeStyles";
import { RecipeInterface } from "../../types/interface";
import imageUrl from "../../utils/imageUrl";

const Recommended: React.FC<any> = ({ navigation }) => {
  const recommendations = useRecoilValue(renderRecommendation);
  return (
    <View style={styles.recommendedContainer}>
      <Text style={styles.header}>Recommended</Text>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroller}
      >
        {recommendations.map((item: RecipeInterface) => (
          <TouchableOpacity onPress={() => navigation.push('Details', { itemId: item._id })}>
            <View style={styles.recipeImageBox}>
              <Image source={{ uri: imageUrl(item) }} style={styles.scrollerRecipe}/>
            </View>
          </TouchableOpacity>
        ),
        )}
      </ScrollView>
    </View>
  )
}

export default Recommended;
