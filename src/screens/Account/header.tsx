import {
  FontAwesome,
  AntDesign,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import {
  Box,
  Center,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from "native-base";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import {
  getAccountDetailsByPeriod,
  setSelectedAccount,
  setShowValues,
} from "../../store/actions/account";
import { connect } from "react-redux";
import {
  AccountFullResponseBody,
  SimpleAccountResponseBody,
} from "../../types";
import { useDispatch } from "react-redux";
import { Dimensions, StyleSheet } from "react-native";

interface Props {
  showValues: boolean;
  accounts: Array<SimpleAccountResponseBody>;
  selectedAccount: AccountFullResponseBody;
}
const { width } = Dimensions.get("window");

const HeaderAccount = (props: Props) => {
  const { accounts, showValues, selectedAccount } = props;
  const dispatch = useDispatch();
  const combobox = React.useRef();

  const getAccountsNames = accounts.map(
    (account: { accountDescription: string; id: string }) => {
      return { title: account.accountDescription, id: account.id };
    }
  );

  const handleAccount = (id: string) => {
    const account = accounts.find(
      (account: { id: string }) => account.id === id
    );
    dispatch(setSelectedAccount(account));
  };

  const handleAccountDetails = (
    id: number,
    startDate: string,
    endDate: string
  ) => {
    dispatch(getAccountDetailsByPeriod(id, startDate, endDate));
  };

  return (
    <Box
      backgroundColor={"principal.900"}
      w={"100%"}
      h={250}
      paddingTop={"15%"}
      paddingLeft={"5%"}
      paddingRight={"5%"}
      marginBottom={"5%"}
      roundedBottomLeft={50}
      roundedBottomRight={50}
    >
      <HStack justifyContent={"space-between"}>
        <SelectDropdown
          data={getAccountsNames}
          search={true}
          defaultValueByIndex={0}
          // defaultValue={'Egypt'}
          onSelect={(selectedItem, index) => {
            handleAccount(selectedItem.id);
          }}
          defaultButtonText={"Select account..."}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.title;
          }}
          rowTextForSelection={(item, index) => {
            return item.title;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#FFF"}
                size={14}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
        <IconButton
          colorScheme="white"
          h={10}
          key={"ghost"}
          variant={"ghost"}
          _icon={{
            as: AntDesign,
            name: "search1",
            color: "white",
          }}
        />
      </HStack>
      <HStack justifyContent={"center"} space={3}>
        <IconButton
          colorScheme="white"
          key={"arrow-back-ios"}
          variant={"ghost"}
          _icon={{
            as: MaterialIcons,
            name: "arrow-back-ios",
            color: "white",
          }}
          onPress={() => {
            handleAccountDetails(
              selectedAccount.id,
              selectedAccount.previousMonth.startDate,
              selectedAccount.previousMonth.endDate
            );
          }}
        />
        <Text style={{ color: "#FFF", fontSize: 18, marginTop: 10 }}>
          {selectedAccount.selectedPeriod.description}
        </Text>
        <IconButton
          colorScheme="white"
          key={"arrow-forward-ios"}
          variant={"ghost"}
          _icon={{
            as: MaterialIcons,
            name: "arrow-forward-ios",
            color: "white",
          }}
          onPress={() => {
            handleAccountDetails(
              selectedAccount.id,
              selectedAccount.nextMonth.startDate,
              selectedAccount.nextMonth.endDate
            );
          }}
        />
      </HStack>
      <HStack justifyContent={"space-between"}>
        <Heading size={"2xl"} color={"white"}>
          {showValues ? selectedAccount.balanceDescription : "****"}
        </Heading>
        <IconButton
          colorScheme="white"
          key={"eye"}
          variant={"ghost"}
          onPress={() => {
            dispatch(setShowValues(!showValues));
          }}
          _icon={{
            as: Entypo,
            name: showValues ? "eye" : "eye-with-line",
            color: "white",
          }}
        />
      </HStack>
      <HStack>
        <Box
          shadow={5}
          p={2}
          rounded={10}
          w={"100%"}
          backgroundColor="white"
          h={100}
        >
          <HStack marginTop={"5%"} justifyContent={"space-around"}>
            <VStack space={2}>
              <Center>
                <Heading color={"gray.500"} size={"xs"}>
                  Total Revenues
                </Heading>
                <Heading color={"green.500"}>
                  {showValues
                    ? selectedAccount.totalRevenuesDescription
                    : "****"}
                </Heading>
              </Center>
            </VStack>
            <VStack space={2}>
              <Center>
                <Heading color={"gray.500"} size={"xs"}>
                  Total Expenses
                </Heading>
                <Heading color={"red.500"}>
                  {showValues
                    ? selectedAccount.totalExpensesDescription
                    : "****"}
                </Heading>
              </Center>
            </VStack>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    width,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  headerTitle: { color: "#FFF", fontWeight: "bold", fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: "#FFF" },
  viewContainer: { flex: 1, width, backgroundColor: "#FFF" },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "10%",
    paddingBottom: "20%",
  },

  dropdown1BtnStyle: {
    width: "50%",
    height: 35,
    backgroundColor: "#ff6600",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  dropdown1BtnTxtStyle: {
    color: "#FFF",
    textAlign: "left",
    fontSize: 14,
  },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF", marginTop: -10 },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
});

const mapStateToProps = (store: any) => {
  return {
    showValues: store.accountReducer.showValues,
    accounts: store.accountReducer.accounts,
    selectedAccount: store.accountReducer.selectedAccount,
  };
};

export default connect(mapStateToProps)(HeaderAccount);
