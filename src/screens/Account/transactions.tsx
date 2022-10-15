import {
  VStack,
  Heading,
  FlatList,
  Text,
  Center,
  Link,
  Spinner,
} from "native-base";
import React from "react";

import { connect } from "react-redux";
import { AccountFullResponseBody } from "../../types";
import TransactionItem from "./transactionItem";

interface Props {
  selectedAccount: AccountFullResponseBody;
  loadingDetails: boolean;
}

const Transactions = (props: Props) => {
  const { selectedAccount, loadingDetails } = props;
  const renderTransactions = (obj: any) => {
    const { item } = obj;
    return <TransactionItem item={item} />;
  };
  const renderFooterComponent = () => {
    return selectedAccount.transactions.length > 0 ? (
      <Link
        alignSelf={"flex-end"}
        marginRight={10}
        colorScheme="blue"
        onPress={() => {
          console.log("Veja mais");
        }}
      >
        Veja mais
      </Link>
    ) : null;
  };

  return (
    <VStack paddingLeft={"5%"} height={"50%"}>
      <Heading color={"gray.500"} size={"xs"}>
        Transactions Details
      </Heading>
      <VStack>
        {loadingDetails ? (
          <Center>
            <Spinner size={"lg"} />
          </Center>
        ) : (
          <FlatList
            data={selectedAccount.transactions}
            renderItem={renderTransactions}
            ListEmptyComponent={() => (
              <Center>
                <Text fontSize={15} color={"gray.500"}>
                  No transactions
                </Text>
              </Center>
            )}
            maxHeight={"100%"}
            ListFooterComponent={renderFooterComponent}
          />
        )}
      </VStack>
    </VStack>
  );
};

const mapStateToProps = (store: any) => {
  return {
    selectedAccount: store.accountReducer.selectedAccount,
    loadingDetails: store.accountReducer.loadingDetails,
  };
};

export default connect(mapStateToProps)(Transactions);
