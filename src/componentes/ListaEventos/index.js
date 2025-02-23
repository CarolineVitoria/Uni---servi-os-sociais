import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ListaEventos(dadosRecebidos) {
  const dados = dadosRecebidos.dados;
  const navigation = useNavigation();

  return (
    <FlatList
      data={dados}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ padding:5, shadowColor: '#000',
            shadowOffset: { width: 1, height: 4 },
            shadowOpacity: 0.5,
            shadowRadius: 3, 
            elevation: 5, overflow: 'hidden'}}>
        <TouchableOpacity
        
        onPress={() => navigation.navigate('Evento', {itemData: { ...item, image: item.image }})}
        style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          <View style={{marginTop: 4}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.title}</Text>
            <Text>{item.Local}</Text>
          </View>
        </TouchableOpacity></View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    borderRadius: 7,


  },image:{
    width: '100%',
    height: 200
  }

});