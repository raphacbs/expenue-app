import { VStack, Heading, FlatList } from "native-base";
import React from "react";
import { connect } from "react-redux";
import { AccountFullResponseBody } from "../../types";
import TransactionItem from "./transactionItem";

interface Props {
  selectedAccount: AccountFullResponseBody;
}

const Transactions = (props: Props) => {
  const { selectedAccount } = props;
  const renderTransactions = (obj: any) => {
    const { item } = obj;
    return <TransactionItem item={item} />;
  };

  return (
    <VStack paddingLeft={"5%"} height={"30%"}>
      <Heading color={"gray.500"} size={"xs"}>
        Transactions Details
      </Heading>
      <VStack>
        <FlatList
          data={selectedAccount.transactions}
          renderItem={renderTransactions}
        />
      </VStack>
    </VStack>
  );
};

const mapStateToProps = (store: any) => {
  return {
    selectedAccount: store.accountReducer.selectedAccount,
  };
};

export default connect(mapStateToProps)(Transactions);
