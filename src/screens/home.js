import { Box, Center, Heading, useTheme } from "native-base";
import React from "react";
import { View, Text, Pressable } from "react-native";
const style = require("../../style");
export default function Home({ navigation }) {

  const theme=useTheme();
  return (
    <Box safeArea  flex={1} bg={"primary.600"}>
      <Center><Heading size="lg">
        Welcome
      </Heading>
      <Text>Welcome Home</Text>
      </Center>
     
    </Box>
  );
}
