import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import type { LinearGradientProps } from "expo-linear-gradient";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { PageHeader } from "@/components/page-header";

const prompts = [
  "Rekomendasikan buku fantasi dengan tokoh utama perempuan kuat.",
  "Bantu ringkas bab 3 'Laut Bercerita'.",
  "Cari buku non-fiksi tentang kebiasaan produktif.",
];

export default function VerAIScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <PageHeader title="VerAI" subtitle="Asisten AI bacaan" />

      <LinearGradient
        colors={["#7D5CFF", "#B779FF"] as LinearGradientProps["colors"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}
      >
        <Ionicons name="sparkles" size={22} color="#FFFFFF" />
        <View style={{ flex: 1 }}>
          <Text style={styles.heroTitle}>Apa yang ingin kamu cari?</Text>
          <Text style={styles.heroDesc}>
            Tanyakan rekomendasi, ringkasan, atau ide bacaan terbaru.
          </Text>
        </View>
      </LinearGradient>

      <View style={styles.promptWrapper}>
        <Text style={styles.sectionTitle}>Contoh prompt</Text>
        {prompts.map((prompt) => (
          <TouchableOpacity key={prompt} style={styles.promptCard}>
            <Ionicons name="flash-outline" size={16} color="#7C3AED" />
            <Text style={styles.promptText}>{prompt}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.chatCard}>
        <View style={styles.chatHeader}>
          <View style={styles.chatAvatar}>
            <Ionicons name="sparkles" size={18} color="#FFFFFF" />
          </View>
          <View>
            <Text style={styles.chatName}>VerAI</Text>
            <Text style={styles.chatStatus}>Online sekarang</Text>
          </View>
        </View>
        <View style={styles.chatBubble}>
          <Text style={styles.chatBubbleText}>
            Halo, Veritas! Aku bisa bantu rekomendasi buku berdasarkan mood,
            genre, atau penulis favoritmu. Mau mulai dari mana?
          </Text>
        </View>

        <View style={styles.inputField}>
          <TextInput
            placeholder="Tanyakan sesuatu..."
            placeholderTextColor="#B4A9D9"
            style={styles.input}
          />
          <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="send" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const cardShadow = Platform.select({
  ios: {
    shadowColor: "#6A4AF6",
    shadowOpacity: 0.16,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
  },
  android: {
    elevation: 10,
  },
}) as object;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F1FF",
  },
  content: {
    padding: 24,
    paddingBottom: 120,
  },
  hero: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderRadius: 28,
    padding: 20,
    marginBottom: 20,
    ...cardShadow,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
  heroDesc: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 13,
    marginTop: 6,
    lineHeight: 18,
  },
  promptWrapper: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 20,
    marginBottom: 20,
    ...cardShadow,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#37285F",
    marginBottom: 14,
  },
  promptCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 16,
    padding: 12,
    backgroundColor: "#F4EEFF",
    marginBottom: 10,
  },
  promptText: {
    flex: 1,
    fontSize: 13,
    color: "#4C3C78",
  },
  chatCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    padding: 22,
    ...cardShadow,
  },
  chatHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 18,
  },
  chatAvatar: {
    width: 44,
    height: 44,
    borderRadius: 18,
    backgroundColor: "#7C3AED",
    alignItems: "center",
    justifyContent: "center",
  },
  chatName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#2F225E",
  },
  chatStatus: {
    fontSize: 12,
    color: "#9C95C1",
    marginTop: 4,
  },
  chatBubble: {
    backgroundColor: "#F6F2FF",
    borderRadius: 20,
    padding: 16,
    marginBottom: 18,
  },
  chatBubbleText: {
    fontSize: 13,
    color: "#4A3D73",
    lineHeight: 20,
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ECE6FF",
    paddingHorizontal: 12,
    height: 46,
  },
  input: {
    flex: 1,
    fontSize: 13,
    color: "#3F3264",
  },
  sendButton: {
    backgroundColor: "#7C3AED",
    width: 32,
    height: 32,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});

