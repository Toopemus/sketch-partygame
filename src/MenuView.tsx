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
          <Text style={[themeStyles.header]}>Valmistelu</Text>
          <View style={styles.list}>
            <Text>- 3-6 pelaajaa</Text>
            <Text>- Kynä ja paperia</Text>
          </View>
          <Text style={[themeStyles.header]}>Pelin kulku</Text>
          <View style={styles.list}>
            <Text>- Pelaajille jaetaan piirrettäväksi sana</Text>
            <Text>- Yksi pelaajista määrätään salaa huijariksi</Text>
            <Text>- Huijari ei tiedä sanaa</Text>
            <Text>- Pelaajat piirtävät annettua sanaa 'viiva' kerrallaan</Text>
          </View>
          <Text style={[themeStyles.header]}>Tavoite</Text>
          <View style={styles.list}>
            <Text>- Huijari pyrkii olemaan paljastumatta</Text>
            <Text>- Pelaajat yrittävät tunnistaa huijarin</Text>
          </View>
          <Text style={[themeStyles.header]}>Vuoron jälkeen</Text>
          <View style={styles.list}>
            <Text>- Pelaajat osoittavat sitä, kenet luulevat huijariksi</Text>
          </View>
          <Text style={[themeStyles.header]}>Pisteet</Text>
          <View style={styles.list}>
            <Text>- Tunnistamalla huijarin saa yhden pisteen</Text>
            <Text>- Huijari saa pisteen jokaisesta huijatusta pelaajasta</Text>
          </View>
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

      {showRules ? <RulesView /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  mainTitle: {
    fontFamily: "Super-Reduce",
    fontSize: 72,
    color: "#090C02",
    textAlign: "center",
  },
  button: {
    width: "100%",
    padding: 7,
    marginVertical: 5,
  },
  rulesModal: {
    position: "absolute",
    padding: 10,
    justifyContent: "space-between",
  },
  list: {
    marginBottom: 10,
  },
})

export default MenuView
