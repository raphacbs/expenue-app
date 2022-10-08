import {
  IconButton,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { List } from "react-native-paper";
import { TransactionBody } from "../../types";
import { connect } from "react-redux";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

interface Props {
  item: TransactionBody;
  showValues: boolean;
}

const TransactionItem = (props: Props) => {
  const { item, showValues } = props;
  return (
    <HStack
      w={"100%"}
      justifyContent="space-between"
      paddingBottom={2}
      paddingTop={2}
    >
      <HStack space={3}>
        <IconButton
          bg="principal.900"
          rounded={50}
          variant={"solid"}
          _icon={{
            as: MaterialIcons,
            name: item.type == "REVENUE" ? "attach-money" : "fastfood",
            size: "lg",
          }}
        />
        <VStack justifyContent={"center"}>
          <Heading size={"sm"}>{item.description}</Heading>
          <Text fontSize={10} color={"gray.400"}>
            {item.dateValue}
          </Text>
        </VStack>
      </HStack>
      <VStack justifyContent="center" marginRight={"2%"}>
        <Heading size={"sm"}>
          {showValues ? item.amountDescription : "****"}
        </Heading>
      </VStack>
    </HStack>
    // <List.Item
    //   title={
    //     <VStack>
    //       <Text>{item.description}</Text>
    //     </VStack>
    //   }
    //   description={
    //     <Stack>
    //       <Text>{item.dateValue}</Text>
    //     </Stack>
    //   }
    //   right={() => (
    //     <Heading size={"sm"}>
    //       {showValues ? item.amountDescription : "****"}
    //     </Heading>
    //   )}
    //   left={(props) => (
    //     <List.Icon
    //       {...props}
    //       icon="circle"
    //       color={item.type == "REVENUE" ? "green" : "red"}
    //     />
    //   )}
    // />
  );
};
const mapStateToProps = (store: any) => {
  return {
    showValues: store.accountReducer.showValues,
  };
};

export default connect(mapStateToProps)(TransactionItem);
