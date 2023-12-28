import { Pressable, StyleSheet, Text, View } from "react-native"
import { PhaseComponentProps } from "./types/PhaseComponentProps"
import { useState } from "react"
import themeStyles from "./styles"

const MenuView = ({ handleNextPhase }: PhaseComponentProps) => {
  const [showRules, setShowRules] = useState(false)

  const RulesView = () => {
    return (
      <View style={[themeStyles.boxedElement, themeStyles.white, styles.rulesModal]}>
        <View>
          <Text>Valmistelu</Text>
          <Text>- 3-6 pelaajaa</Text>
          <Text>- Kynä ja paperia</Text>
          <Text style={styles.subHeader}>Pelin kulku</Text>
          <Text>- Pelaajille jaetaan piirrettäväksi sana</Text>
          <Text>- Yksi pelaajista määrätään salaa huijariksi</Text>
          <Text>- Huijari ei tiedä sanaa</Text>
          <Text>- Pelaajat piirtävät annettua sanaa 'viiva' kerrallaan</Text>
          <Text style={styles.subHeader}>Tavoite</Text>
          <Text>- Huijari pyrkii olemaan paljastumatta</Text>
          <Text>- Pelaajat yrittävät tunnistaa huijarin</Text>
          <Text style={styles.subHeader}>Vuoron jälkeen</Text>
          <Text>- Pelaajat osoittavat sitä, kenet luulevat huijariksi</Text>
          <Text style={styles.subHeader}>Pisteet</Text>
          <Text>- Tunnistamalla huijarin saa yhden pisteen</Text>
          <Text>- Huijari saa pisteen jokaisesta huijatusta pelaajasta</Text>
        </View>
        <Pressable
          onPress={() => setShowRules(false)}
          style={[themeStyles.boxedElement, themeStyles.yellow, styles.button]}
        ><Text>Sulje</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.mainTitle]}>jotai siistii niiku</Text>
      <Pressable
        onPress={handleNextPhase}
        style={[themeStyles.boxedElement, themeStyles.cyan, styles.button]}
      ><Text>Pelaa</Text>
      </Pressable>
      <Pressable
        onPress={() => setShowRules(true)}
        style={[themeStyles.boxedElement, themeStyles.yellow, styles.button]}
      ><Text>Säännöt</Text>
      </Pressable>

      { showRules ? <RulesView /> : null }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitle: {
    fontFamily: "Super-Reduce",
    fontSize: 72,
    color: "#0c0c0c",
    textAlign: "center",
  },
  button: {
    width: "100%",
    padding: 7,
    marginVertical: 5,
  },
  rulesModal: {
    height: "70%",
    width: "90%",
    position: "absolute",
    padding: 10,
    justifyContent: "space-between",
  },
  subHeader: {
    marginTop: 10,
  },
})

export default MenuView
