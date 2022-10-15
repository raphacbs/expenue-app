import { Center, VStack, Stack, Box, Heading, Button } from "native-base";

import { connect } from "react-redux";
import LottieView from "lottie-react-native";
import React, { useRef } from "react";
import { RefreshControl, ScrollView } from "react-native";

interface Props {
  loading: boolean;
  children: React.ReactNode;
  error: any;

  onRefresh?: () => void;
}

const Container = (props: Props) => {
  const { children, loading, error, onRefresh } = props;
  const animation = useRef(null);

  const handleRefresh = () => {
    if (onRefresh) {
      onRefresh();
    }
  };

  return (
    <Stack>
      {loading ? (
        <VStack h={"100%"}>
          <Box flex={1} bg={"principal.900"} w={"100%"} h="8%"></Box>
          <Center flex={15} bg={"principal.900"}>
            <LottieView
              autoPlay
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
              }}
              source={require("../../../assets/animations/wallet_loading.json")}
            />
          </Center>
        </VStack>
      ) : (
        <Stack>
          {error == "" ? (
            // <ScrollView
            //   refreshControl={
            //     <RefreshControl
            //       refreshing={loading}
            //       onRefresh={handleRefresh}
            //     />
            //   }
            // >
            children
          ) : (
            // </ScrollView>
            // <RefreshControl
            //   refreshing={loading}
            //   onRefresh={handleRefresh}
            //   style={{ flexDirection: "row" }}
            // >
            // </RefreshControl>
            <VStack backgroundColor="white" h={"100%"}>
              <Box bg={"red.500"} w={"100%"} h="8%"></Box>
              <Center>
                <LottieView
                  autoPlay
                  style={{
                    width: "70%",
                    height: "70%",
                    backgroundColor: "white",
                    alignSelf: "center",
                  }}
                  loop={false}
                  source={require("../../../assets/animations/animation_error.json")}
                />
              </Center>

              <VStack space={3} alignItems={"center"} marginTop={-100}>
                <Heading>Ops! An error has occurred.</Heading>
                <Heading color={"gray.500"} size={"xs"}>
                  {error}
                </Heading>
                <Button onPress={handleRefresh}>Try again</Button>
              </VStack>
            </VStack>
          )}
        </Stack>
      )}
    </Stack>
  );
};

const mapStateToProps = (store: any) => {
  return {
    loading: store.commonReducer.loading,
    error: store.commonReducer.error,
  };
};

export default connect(mapStateToProps)(Container);
