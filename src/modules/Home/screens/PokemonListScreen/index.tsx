import React, { useContext } from "react";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as yup from "yup";
import BigList from "react-native-big-list";

import { ScreenContent, ScreenTitle } from "./styles";
import { ScreenComponent } from "@source/components/ScreenComponent";
import { SearchComponent } from "@source/components/SearchComponent";

import { PokemonContext, PokemonProvider } from "../../contexts/PokemonContext";
import { PokemonCard } from "../../components/PokemonCard";
import { Pokemon } from "../../models/Pokemon";

const SEARCH_FORM_VALIDATION = yup.object({
  text: yup.string().required().min(3),
  loading: yup.boolean().isFalse(),
});

const { width, height } = Dimensions.get("screen");
const PokemonListScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { pokemons, getListOfPokemons, searchPokemon } = useContext(PokemonContext);

  const searchForm = useFormik({
    enableReinitialize: true,
    initialValues: { text: "", loading: false },
    validationSchema: SEARCH_FORM_VALIDATION,
    validate({ text }) {
      if(text.length === 0) {
        getListOfPokemons();
      };
    },

    onSubmit({ text }, helper) {
      helper.setFieldValue("loading", true);
      searchPokemon(text).finally(() => {
        helper.setFieldValue("loading", false);
      });
    },
  });

  const handleNavigateToDetails = React.useCallback((pokemon: Pokemon) => {
    navigate("PokemonDetail", { pokemon });
  }, []);

  const onSearchTextChanges = React.useCallback((text: string) => {
    searchForm.setFieldValue("text", text);
  }, [searchForm]);

  const RenderPokemonCard = React.useCallback(({ item, index }) => {
    return (
      <PokemonCard
      item={item}
      index={index}
      onPress={handleNavigateToDetails}
      />
    );
  }, []);

  return (
    <ScreenComponent>
      <ScreenTitle>
        More than 250 Pokemons for you choose your favorite.
      </ScreenTitle>
      <ScreenContent>
        <SearchComponent
        placeholder="Search Pokémon"
        placeholderTextColor="rgba(0,0,0,0.3)"

        value={searchForm.values.text}
        onChangeText={onSearchTextChanges}
        searching={searchForm.values.loading}
        onSearchSubmit={searchForm.handleSubmit}>
        </SearchComponent>
      </ScreenContent>
      <ScreenContent
      style={{ flex: 1 }}>
        <BigList
        numColumns={2}
        data={pokemons}
        itemHeight={height * 0.30}
        renderItem={RenderPokemonCard}
        showsVerticalScrollIndicator={false}
        />
      </ScreenContent>
    </ScreenComponent>
  );
};

export default function () {
  return (
    <PokemonProvider>
      <PokemonListScreen />
    </PokemonProvider>
  );
};