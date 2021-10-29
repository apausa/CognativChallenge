import React, { Suspense } from "react";
import { useRecoilValue } from 'recoil';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import renderRecipe from '../../recoil/actions/recipeCreator';
import { RenderColumn } from "../../types/interface";
import Recommended from "../../components/recommended/Recommended";
import Column from "../../components/column/Column";
import styles from "./homeStyles";

const Home: React.FC<any> = () => {
  const realRecipes = useRecoilValue(renderRecipe);
  const renderRecommended = () => <Recommended/>;
  const RenderColumn = ({ item }: RenderColumn) => <Column item={item} />;
  return (
    <SafeAreaView style={styles.mainScreen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.navBar}>
        <Text style={styles.title}>Recipes</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={realRecipes}
          ListHeaderComponent={renderRecommended}
          keyExtractor={({ _id }) => _id}
          renderItem={RenderColumn}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;