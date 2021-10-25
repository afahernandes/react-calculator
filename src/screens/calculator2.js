import React from "react";
import {
  Box,
  Button,
  Heading,
  NumberInput,
  NumberInputField,
  Text,
  View,
} from "native-base";
export default function Calculator2({ navigation }) {
  
  const style = require("../../style");
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [resultValue, setResultValue] = React.useState(0);
  const handleCalculate = (operator) => {
    if (!value1 && !value2) return;

    if (operator === "+")
      setResultValue(parseInt(value1) + parseInt(value2));
    if (operator === "-")
      setResultValue(parseInt(value1) - parseInt(value2));
    if (operator === "*")
      setResultValue(parseInt(value1) * parseInt(value2));
    if (operator === "/")
      setResultValue(parseInt(value1) / parseInt(value2));
    if (operator === "%")
      setResultValue(parseInt(value1) % parseInt(value2));
  };

  return (
    <Box style={style.Container} flex={1} p={10} w="100%" mx="auto">
      <Box space={3} mt={15} w="100%">
        <Heading size="lg" mb={2} color="primary.600">
          Value A
        </Heading>
        <NumberInput
          value={value1}
          onChange={(e) => {
            setValue1(isNaN(e) ? 0 : e);
          }}
        >
          <NumberInputField
            value={value1}
            color="#000"
            borderColor="#FFF"
            backgroundColor="#FFF"
            _focus={{ borderColor: "#FFF" }}
            fontSize={30}
            textAlign="right"
            padding={2}
          />
        </NumberInput>

        <Heading size="lg" mt={3}
          mb={2} color="primary.600">
          Value B
        </Heading>
        <NumberInput
          value={value2}
          onChange={(e) => {
            setValue2(isNaN(e) ? 0 : e);
          }}
        >
          <NumberInputField
            value={value2}
            color="#000"
            borderColor="#FFF"
            alignItems="center"
            backgroundColor="#FFF"
            fontSize={30}
            textAlign="right"
            _focus={{ borderColor: "#FFF" }}
            padding={2}
          />
        </NumberInput>

        <Heading size="lg"   mt={3}
          mb={2}
         color="primary.600">
          Result
        </Heading>
        <View
          style={{
            backgroundColor: "#ffffff",
            padding: 10,
            borderRadius: 5,
            minHeight: "8%",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Text color="#000" fontSize={30}>
            {resultValue}
          </Text>
        </View>

        <View
          mb={3}
          mt={2}
          flexDirection="row"
          width="100%"
          justifyContent="center"
        >
          <Button
            size={20}
            mr={3}
            bg="primary.400"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            onPress={() => handleCalculate("+")}
            shadow={3}
          >
            +
          </Button>
          <Button
            size={20}
            mr={3}
            bg="primary.400"
            rounded="md"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            shadow={3}
            onPress={() => handleCalculate("-")}
          >
            -
          </Button>
          <Button
            size={20}
            mr={3}
            bg="primary.400"
            rounded="md"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            shadow={3}
            onPress={() => handleCalculate("*")}
          >
            *
          </Button>
        </View>

        <View mb={3} flexDirection="row" justifyContent="center">
          <Button
            size={20}
            mr={3}
            bg="primary.400"
            rounded="md"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            shadow={3}
            onPress={() => handleCalculate("/")}
          >
            /
          </Button>
          <Button
            size={20}
            mr={3}
            bg="primary.400"
            rounded="md"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            shadow={3}
            onPress={() => handleCalculate("%")}
          >
            %
          </Button>
        </View>
      </Box>
    </Box>
  );
}
