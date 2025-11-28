import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ReactNode } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  rightSlot?: ReactNode;
  containerStyle?: ViewStyle;
};

export function PageHeader({
  title,
  subtitle,
  showBack = false,
  rightSlot,
  containerStyle,
}: PageHeaderProps) {
  const router = useRouter();

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {showBack ? (
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          accessibilityLabel="Kembali"
        >
          <Ionicons name="arrow-back" size={20} color="#2E1F63" />
        </TouchableOpacity>
      ) : (
        <View style={styles.backPlaceholder} />
      )}

      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>

      <View style={styles.rightSlot}>{rightSlot}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  backPlaceholder: {
    width: 40,
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2E1F63",
  },
  subtitle: {
    fontSize: 12,
    color: "#9B92C2",
  },
  rightSlot: {
    width: 40,
    alignItems: "flex-end",
  },
});

