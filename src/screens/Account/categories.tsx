import { MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Center,
  FlatList,
  Heading,
  HStack,
  Icon,
  IconButton,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { connect } from "react-redux";

interface Props {
  showValues: boolean;
}

const CategoriesComponent = (props: Props) => {
  const { showValues } = props;
  const categories = [
    {
      id: 1,
      description: "Food",
      icon: "fastfood",
      type: "MaterialCommunityIcons",
      totalExpensesDescription: "R$ 200,00",
      iconColor: "blue.600",
    },
    {
      id: 2,
      description: "Service",
      icon: "room-service",
      type: "MaterialCommunityIcons",
      totalExpensesDescription: "R$ 200,00",
      iconColor: "green.600",
    },
    {
      id: 3,
      description: "Health",
      icon: "medical-services",
      type: "MaterialCommunityIcons",
      totalExpensesDescription: "R$ 200,00",
      iconColor: "red.600",
    },
  ];

  const render = () => {
    return (
      <VStack space={1}>
        {categories.map((category, key) => {
          return (
            <HStack
              space={4}
              bg={"gray.200"}
              w={"95%"}
              //rounded={10}
              //shadow={2}
              h={50}
              justifyContent={"space-between"}
              key={key}
            >
              <HStack marginLeft={2} space={2} marginTop={2}>
                <Center>
                  <Icon
                    as={MaterialIcons}
                    name={category.icon}
                    color={category.iconColor}
                    size={"2xl"}
                  />
                </Center>
                <Center>
                  <Heading size={"sm"} color={"black"}>
                    {category.description}
                  </Heading>
                </Center>
              </HStack>
              <Center>
                <Heading size={"sm"} marginRight={2} color={"black"}>
                  {showValues ? category.totalExpensesDescription : "****"}
                </Heading>
              </Center>
            </HStack>
          );
        })}
      </VStack>
    );
  };
  return (
    <VStack paddingLeft={"5%"}>
      <Heading color={"gray.500"} size={"xs"}>
        Categories with most expenses
      </Heading>
      {/* <FlatList h={"25%"} data={categories} renderItem={render} /> */}
      {render()}
    </VStack>
  );
};

const mapStateToProps = (store: any) => {
  return {
    selectedAccount: store.accountReducer.selectedAccount,
    showValues: store.accountReducer.showValues,
  };
};

export default connect(mapStateToProps)(CategoriesComponent);
