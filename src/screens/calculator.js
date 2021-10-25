import React from "react";
import {
  View,
  Text,
  Box,
  Heading,
  Button,
} from "native-base";
import {Alert } from "react-native";

export default function Calculator() {
  const style = require("../../style");

  const [currentNumber, setCurrentNumber] = React.useState("");
  const [lastNumber, setLastNumber] = React.useState("");


  const handlePress = (btnPressed) => {
   try{
    if (
      btnPressed === "+" ||
      btnPressed === "-" ||
      btnPressed === "*" ||
      btnPressed === "/" ||
      btnPressed === "%"
    ) {
      setCurrentNumber(currentNumber + btnPressed);
      console.log(btnPressed)
      return;
    }

    switch (btnPressed) {
      case "DEL":
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case "C":
        setLastNumber("");
        setCurrentNumber("");
        return;
      case "=":
        calculate();
        return;
    }
    setCurrentNumber(currentNumber + btnPressed);
    } catch (error) {
    Alert.alert(
      "Failed",
      "Invalid Arguments",
      [
        { text: "OK" }
      ]
    );
  }
  };
  const calculate = () => {
   try {
     
    let lastArr = currentNumber[currentNumber.length - 1];
    // console.log(lastArr);
    if (
      lastArr === "/" ||
      lastArr === "*" ||
      lastArr === "-" ||
      lastArr === "+" ||
      lastArr === "%" ||
      lastArr === "="
    ) {
      return;
    } else {
      if (!currentNumber) return;
      let result = eval(currentNumber).toString();
      setLastNumber(currentNumber + "=");
      setCurrentNumber(result);
      return;
    }
  } catch (error) {
    Alert.alert(
      "Failed",
      "Invalid Arguments",
      [
        { text: "OK" }
      ]
    );
  }
 
  };

  return (
    <Box flex={1} style={style.Container}>
      <Box space={2} w="100%">
        <Heading size="lg" color="primary.600">
          Display
        </Heading>
        <View
          my={3}
          style={{
            backgroundColor: "#ffffff",
            padding: 15,
            borderRadius: 5,
            height: 80,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Text color="#000" fontSize={30}>
          {currentNumber}
          </Text>
        </View>

        <View mb={3} flexDirection="row">
          <Button
            size={20}
            mr={2}
            bg="primary.400"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            onPress={() => handlePress(1)}
            shadow={3}
          >
            1
          </Button>

          <Button
            size={20}
            mr={2}
            bg="primary.400"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            onPress={() => handlePress(2)}
            shadow={3}
          >
            2
          </Button>

          <Button
            size={20}
            mr={2}
            bg="primary.900"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            onPress={() => handlePress("-")}
            shadow={3}
          >
            -
          </Button>

          <Button
            size={20}
            mr={2}
            bg="primary.900"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            onPress={() => handlePress("+")}
            shadow={3}
          >
            +
          </Button>
        </View>

        <View mb={3} flexDirection="row">
          <Button
            size={20}
            mr={2}
            bg="primary.400"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            onPress={() => handlePress(3)}
            shadow={3}
          >
            3
          </Button>

          <Button
            size={20}
            mr={2}
            bg="primary.400"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            onPress={() => handlePress(4)}
            shadow={3}
          >
            4
          </Button>

          <Button
            size={20}
            mr={2}
            bg="primary.900"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            onPress={() => handlePress("/")}
            shadow={3}
          >
            /
          </Button>

          <Button
            size={20}
            mr={2}
            bg="primary.900"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            onPress={() => handlePress("*")}
            shadow={3}
          >
            *
          </Button>
        </View>
        <View mb={3} flexDirection="row">
          <Button
            size={20}
            mr={2}
            bg="primary.400"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            onPress={() => handlePress(5)}
            shadow={3}
          >
            5
          </Button>

          <Button
            size={20}
            mr={2}
            bg="primary.400"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            onPress={() => handlePress(6)}
            shadow={3}
          >
            6
          </Button>

          <Button
            size={20}
            mr={2}
            bg="primary.900"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            onPress={() => handlePress("%")}
            shadow={3}
          >
            %
          </Button>

          <Button
            size={20}
            mr={2}
            bg="primary.900"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            onPress={() => handlePress("=")}
            shadow={3}
          >
            =
          </Button>
        </View>
        <View mb={3} flexDirection="row">
          <Button
            size={20}
            mr={2}
            bg="primary.400"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            onPress={() => handlePress(7)}
            shadow={3}
          >
            7
          </Button>

          <Button
            size={20}
            mr={2}
            bg="primary.400"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            onPress={() => handlePress(8)}
            shadow={3}
          >
            8
          </Button>

          <Button
            size={20}
            mr={2}
            bg="primary.400"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            onPress={() => handlePress(9)}
            shadow={3}
          >
            9
          </Button>

          <Button
            size={20}
            mr={2}
            bg="primary.400"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 60,
            }}
            onPress={() => handlePress(0)}
            shadow={3}
          >
            0
          </Button>
        </View>
        <View mb={3} flexDirection="row">
          <Button
            flex={1}
            size={16}
            mr={2}
            bg="primary.900"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 30,
            }}
            onPress={() => handlePress("DEL")}
            shadow={3}
          >
            DEL
          </Button>

          <Button
            flex={1}
            size={16}
            bg="primary.900"
            rounded="lg"
            justifyContent="center"
            _text={{
              color: "white",
              fontSize: 50,
            }}
            onPress={() => handlePress("C")}
            shadow={3}
          >
            C
          </Button>
        </View>
      </Box>
    </Box>
  );
}
