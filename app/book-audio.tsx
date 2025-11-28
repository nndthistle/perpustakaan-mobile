import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { BOOKS } from "@/constants/books";
import { PageHeader } from "@/components/page-header";

export default function BookAudioScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string }>();
  const book = BOOKS.find((b) => b.id === params.id) ?? BOOKS[0];
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <PageHeader title="Audiobook" showBack />

      <LinearGradient
        colors={["#ECF1FF", "#FCE5F4"] as LinearGradientProps["colors"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.playerCard}
      >
        <View style={styles.cover} />
        <Text style={styles.bookTitle}>{book.title}</Text>
        <Text style={styles.bookAuthor}>{book.author}</Text>
        <Text style={styles.chapter}>BAB 1 - Pendahuluan</Text>

        <View style={styles.progress}>
          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
          <View style={styles.progressMeta}>
            <Text style={styles.progressText}>0:00</Text>
            <Text style={styles.progressText}>2:43</Text>
          </View>
        </View>

        <View style={styles.controls}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="play-back" size={20} color="#7C3AED" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="play-forward" size={20} color="#7C3AED" />
          </TouchableOpacity>
        </View>

        <View style={styles.secondaryRow}>
          <View style={styles.volumeRow}>
            <Ionicons name="volume-medium" size={18} color="#7C3AED" />
            <View style={styles.volumeTrack}>
              <View style={styles.volumeFill} />
            </View>
          </View>
          <View style={styles.speedRow}>
            <Text style={styles.speedLabel}>1.0x</Text>
          </View>
          <TouchableOpacity style={styles.chapterButton}>
            <Text style={styles.chapterButtonText}>Daftar BAB</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F1FF",
  },
  content: {
    padding: 24,
    paddingTop: 40,
    paddingBottom: 80,
  },
  playerCard: {
    borderRadius: 40,
    padding: 26,
    alignItems: "center",
  },
  cover: {
    width: 200,
    height: 200,
    borderRadius: 32,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2F235F",
  },
  bookAuthor: {
    fontSize: 13,
    color: "#8C83B6",
    marginTop: 4,
  },
  chapter: {
    fontSize: 12,
    color: "#8C83B6",
    marginTop: 8,
    marginBottom: 24,
  },
  progress: {
    width: "100%",
    marginBottom: 20,
  },
  progressTrack: {
    height: 6,
    borderRadius: 999,
    backgroundColor: "#E3D9FF",
  },
  progressFill: {
    width: "40%",
    height: "100%",
    borderRadius: 999,
    backgroundColor: "#7C3AED",
  },
  progressMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  progressText: {
    fontSize: 11,
    color: "#8C83B6",
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    marginBottom: 20,
  },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 24,
    backgroundColor: "#7C3AED",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    width: "100%",
  },
  volumeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flex: 1,
  },
  volumeTrack: {
    flex: 1,
    height: 6,
    borderRadius: 999,
    backgroundColor: "#E3D9FF",
  },
  volumeFill: {
    width: "70%",
    height: "100%",
    borderRadius: 999,
    backgroundColor: "#7C3AED",
  },
  speedRow: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
  },
  speedLabel: {
    fontSize: 12,
    color: "#2F235F",
    fontWeight: "600",
  },
  chapterButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E3D9FF",
    backgroundColor: "#FFFFFF",
  },
  chapterButtonText: {
    fontSize: 12,
    color: "#2F235F",
  },
});

