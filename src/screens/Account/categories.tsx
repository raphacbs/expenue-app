import { MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Center,
  FlatList,
  Heading,
  IconButton,
  Text,
  VStack,
} from "native-base";
import React from "react";

const CategoriesComponent = () => {
  const categories = [
    { id: 1, description: "Food", icon: "fastfood" },
    { id: 2, description: "Service", icon: "room-service" },
    { id: 3, description: "Health", icon: "medical-services" },
    { id: 4, description: "Others", icon: "pending" },
  ];
  const render = (obj: any) => {
    const { item } = obj;
    return (
      <Box
        margin={5}
        padding={2}
        bg={"principal.900"}
        w={20}
        h={20}
        rounded={10}
        justifyContent={"center"}
      >
        <Center>
          <IconButton
            bg="principal.900"
            rounded={50}
            variant={"solid"}
            _icon={{
              as: MaterialIcons,
              name: item.icon,
              size: "lg",
            }}
          />
          <Text color={"white"}>{item.description}</Text>
        </Center>
      </Box>
    );
  };
  return (
    <VStack paddingLeft={"5%"}>
      <Heading color={"gray.500"} size={"xs"}>
        Categories
      </Heading>
      <FlatList horizontal data={categories} renderItem={render} />
    </VStack>
  );
};

export default CategoriesComponent;
