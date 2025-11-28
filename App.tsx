import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function App() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch("http://192.168.0.12:3000/health");
        const data = await response.json();
        setStatus(data.status);
      } catch (error) {
        console.log(error);
        setStatus("Error connecting to backend");
      }
    };

    fetchStatus();
  }, []);

  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ fontSize: 18 }}>Backend status: {status}</Text>
    </View>
  );
}