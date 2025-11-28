import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { BOOKS } from "@/constants/books";

const channels = [
  { label: "WhatsApp", icon: "logo-whatsapp" },
  { label: "Instagram", icon: "logo-instagram" },
  { label: "X", icon: "logo-twitter" },
  { label: "Facebook", icon: "logo-facebook" },
  { label: "Email", icon: "mail-outline" },
];

export default function ShareBookScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string }>();
  const book = BOOKS.find((b) => b.id === params.id) ?? BOOKS[0];
  return (
    <View style={styles.overlay}>
      <Pressable style={StyleSheet.absoluteFill} onPress={() => router.back()} />
      <View style={styles.card}>
        <Text style={styles.title}>Bagikan Buku</Text>
        <Text style={styles.subtitle}>
          Bagikan "{book.title}" dengan teman anda
        </Text>

        <View style={styles.buttonGrid}>
          {channels.map((item) => (
            <TouchableOpacity key={item.label} style={styles.shareBtn}>
              <Ionicons name={item.icon as never} size={16} color="#7C3AED" />
              <Text style={styles.shareLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.linkRow}>
          <View>
            <Text style={styles.linkLabel}>Link buku</Text>
            <Text style={styles.linkValue}>
              https://veritaslib/{book.id}/
            </Text>
          </View>
          <TouchableOpacity style={styles.copyBtn}>
            <Text style={styles.copyText}>Salin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2F235F",
  },
  subtitle: {
    fontSize: 12,
    color: "#8F88B9",
    marginBottom: 18,
    marginTop: 4,
  },
  buttonGrid: {
    gap: 10,
  },
  shareBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#EFE9FF",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  shareLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#2F235F",
  },
  linkRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#EFE9FF",
    borderRadius: 18,
    padding: 14,
    marginTop: 16,
  },
  linkLabel: {
    fontSize: 11,
    color: "#8F88B9",
  },
  linkValue: {
    fontSize: 12,
    color: "#2F235F",
    marginTop: 4,
  },
  copyBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    backgroundColor: "#F0E7FF",
  },
  copyText: {
    fontSize: 12,
    color: "#7C3AED",
    fontWeight: "600",
  },
});

