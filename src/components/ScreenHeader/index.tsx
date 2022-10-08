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
      <Appbar.Header style={{ backgroundColor: "#ff6600" }}>
        <Appbar.Content title={title} subtitle={subtitle} />
        {actionOne ? (
          <Appbar.Action
            color="#FFFFFFFF"
            icon={actionOne.icon}
            onPress={actionOne.onPress}
          />
        ) : null}
        {actionTwo ? (
          <Appbar.Action
            icon={actionTwo.icon}
            color="#FFFFFFFF"
            onPress={actionTwo.onPress}
          />
        ) : null}
      </Appbar.Header>
      <View style={{ height: 50, backgroundColor: "#ff6600" }}>{children}</View>
    </View>
  );
}
