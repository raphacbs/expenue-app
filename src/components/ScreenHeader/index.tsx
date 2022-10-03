import { Props } from "./types";
import { Appbar } from "react-native-paper";
import { View } from "../Themed";

export default function ScreenHeader({
  title,
  actionOne,
  actionTwo,
  subtitle,
  children,
}: Props) {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title={title} subtitle={subtitle} />
        {actionOne ? (
          <Appbar.Action icon={actionOne.icon} onPress={actionOne.onPress} />
        ) : null}
        {actionTwo ? (
          <Appbar.Action icon={actionTwo.icon} onPress={actionTwo.onPress} />
        ) : null}
      </Appbar.Header>
      <View style={{ margin: 10 }}>{children}</View>
    </View>
  );
}
