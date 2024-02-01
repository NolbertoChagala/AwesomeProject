import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import tw, { useAppColorScheme } from "twrnc";

const buttonColors = [
  tw`bg-yellow-600`,
  tw`bg-orange-600`,
  tw`bg-pink-600`,
  tw`bg-cyan-600`,
  // Agrega más colores según sea necesario
];

const backgroundColors = [
  tw`bg-red-200`,
  tw`bg-blue-200`,
  tw`bg-green-200`,
  tw`bg-purple-200`,
  // Ajusta los colores de fondo según corresponda a los colores del botón
];

const textColors = [
  tw`text-white`,
  tw`text-black`,
  tw`text-white`,
  tw`text-black`,
  // Ajusta los colores de texto según corresponda a los colores de fondo
];

export default function App() {
  const [colorScheme, toggleColorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';
  
  const [buttonColorIndex, setButtonColorIndex] = useState(0);
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);
  const [textColor, setTextColor] = useState(textColors[0]);

  const toggleButtonColor = () => {
    const nextButtonIndex = (buttonColorIndex + 1) % buttonColors.length;
    setButtonColorIndex(nextButtonIndex);
    setBackgroundColorIndex((backgroundColorIndex + 1) % backgroundColors.length);
    setTextColor(textColors[nextButtonIndex]);
    toggleColorScheme();
  };

  const handleBackgroundColorChange = (colorIndex) => {
    setBackgroundColorIndex(colorIndex);
    setTextColor(textColors[colorIndex]); // Cambia el color del texto al mismo índice que el color de fondo
  };

  return (
    <View style={[tw`flex h-full items-center justify-center`, backgroundColors[backgroundColorIndex]]}>
      <Text style={[tw`font-bold px-0`, textColor, { fontSize: 24 }]}>¡VIVAAAAA CHECOOOOOOO¡</Text>
      <Image
        source={require('./assets/checo.jpeg')}
        style={{ width: 200, height: 200, marginTop: 20 }}
      />
      <TouchableOpacity
        onPress={toggleButtonColor}
        style={[tw`py-3 px-6 rounded mt-6 mb-4 `, buttonColors[buttonColorIndex]]}
      >
        <Text style={tw`text-white`}>Cambiar Color</Text>
      </TouchableOpacity>
      {/* Agrega dos cartas con sombra */}
      <View style={[tw`flex-row mt-4`]}>
  <View style={[tw`w-40 h-40 bg-white rounded-lg p-4 shadow-lg m-2`]}>
    <Text>Checo Subcampeon</Text>
  </View>
  <View style={[tw`w-40 h-40 bg-white rounded-lg p-4 shadow-lg m-2`]}>
    <Text>Viejo sabroso</Text>
  </View>
</View>
    </View>
  );
}
