import React from "react";

import { Dimensions, StyleSheet } from "react-native";

import { RootTabScreenProps } from "../../types";
import { useDispatch } from "react-redux";
import { getAllAccounts } from "../../store/actions/account";

import { ScrollView, VStack } from "native-base";

import HeaderAccount from "./header";
import Transactions from "./transactions";
import CategoriesComponent from "./categories";
import Container from "../../components/Container";
import { SET_LOADING_OFF, SET_LOADING_ON } from "../../constants/ActionsTypes";
const { width } = Dimensions.get("window");

export default function TabAccount({
  navigation,
}: RootTabScreenProps<"TabAccount">) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onLoad();
  }, [dispatch]);

  const onLoad = async () => {
    await dispatch({ type: SET_LOADING_ON });
    await dispatch(getAllAccounts());
    await dispatch({ type: SET_LOADING_OFF });
  };

  return (
    <Container onRefresh={onLoad}>
      {/* <ScrollView> */}
      <VStack space={5}>
        <HeaderAccount />
        <Transactions />
        <CategoriesComponent />
      </VStack>
      {/* </ScrollView> */}
    </Container>
  );
}
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
