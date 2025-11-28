import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { PageHeader } from "@/components/page-header";

export default function EditProfileScreen() {
  const router = useRouter();
  const [name, setName] = useState("Veritas Library");
  const [email, setEmail] = useState("veritas@perpustakaan.id");

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <PageHeader title="Edit Profil" showBack />

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>V</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nama</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Simpan perubahan</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F0FF" },
  content: { padding: 24, paddingTop: 56 },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 32,
    backgroundColor: "#7C3AED",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 24,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "700",
  },
  formGroup: { marginBottom: 18 },
  label: { fontSize: 13, color: "#8C84B4", marginBottom: 6 },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: "#2E1F63",
  },
  saveButton: {
    marginTop: 10,
    backgroundColor: "#7C3AED",
    borderRadius: 18,
    paddingVertical: 14,
  },
  saveText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});

