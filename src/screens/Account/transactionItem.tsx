import { IconButton, Heading, HStack, Text, VStack } from "native-base";
import React from "react";
import { List } from "react-native-paper";
import { TransactionBody } from "../../types";
import { connect } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  item: TransactionBody;
  showValues: boolean;
}

const TransactionItem = (props: Props) => {
  const { item, showValues } = props;
  return (
    <VStack w={"100%"} justifyContent="center" marginTop={2}>
      <HStack flex={1} space={5}>
        <IconButton
          flex={1.2}
          bg="principal.900"
          rounded={50}
          variant={"solid"}
          _icon={{
            as: MaterialIcons,
            name: item.type == "REVENUE" ? "attach-money" : "fastfood",
            size: "lg",
          }}
        />
        <VStack flex={10} justifyContent={"center"}>
          <Heading isTruncated size={"sm"}>
            {item.description}
          </Heading>
          <Text fontSize={10} color={"gray.400"}>
            {item.dateValue}
          </Text>
        </VStack>
        <Heading flex={5} marginTop={1} size={"sm"}>
          {showValues ? item.amountDescription : "****"}
        </Heading>
      </HStack>
    </VStack>
  );
};
const mapStateToProps = (store: any) => {
  return {
    showValues: store.accountReducer.showValues,
  };
};

export default connect(mapStateToProps)(TransactionItem);
