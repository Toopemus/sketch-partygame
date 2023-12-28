import { StyleSheet } from "react-native"

const themeStyles = StyleSheet.create({
  boxedElement: {
    borderWidth: 3,
    shadowColor: "#0c0c0c",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  header: {
    fontWeight: "bold",
  },
  fontLg: {
    fontSize: 16,
  },
  white: {
    backgroundColor: "#eee5e5",
  },
  black: {
    backgroundColor: "#0c0c0c",
  },
  red: {
    backgroundColor: "#f52c29",
  },
  green: {
    backgroundColor: "#21c063",
  },
  blue: {
    backgroundColor: "#0000ff",
  },
  cyan: {
    backgroundColor: "#44c3ee",
  },
  yellow: {
    backgroundColor: "#f0e100",
  },
  magenta: {
    backgroundColor: "#ff00ff",
  },
})

export default themeStyles
