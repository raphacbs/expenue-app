import ScreenHeader from "../../components/ScreenHeader";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import React from "react";
import { getAllAccounts } from "../../store/actions/account";
import { RootState } from "../../store/reducers";

export default function TabAccount({
  navigation,
}: RootTabScreenProps<"TabAccount">) {
  const { accounts } = useSelector((state: RootState) => state.accountReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllAccounts());
  }, [dispatch]);

  return (
    <ScreenHeader
      title="Minha Conta"
      subtitle=""
      actionOne={{
        icon: "magnify",
        onPress: () => {
          console.log("pesquisou");
        },
      }}
    >
      <Text>Olá {accounts.length}</Text>
    </ScreenHeader>
  );
}
