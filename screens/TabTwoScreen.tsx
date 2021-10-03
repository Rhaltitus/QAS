import React from 'react';  
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, AppState } from 'react-native';

function Item({item} : { item: any}) {
  return (
    <View style={styles.listItem}>
      <Image source={{uri:item.photo}}  style={{width:60, height:60,borderRadius:30}} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold"}}>{item.name}</Text>
        <Text style={{fontWeight:"bold"}}>{item.email}</Text>
        <Text>{item.position}</Text>
      </View>
      <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"green"}}>voir</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function TabTwoScreen() {
  
  const state = {
    data:[
      {
          "name": "La Poste",
          "email": "10 rue Gambetta, 93100",
          "position": "1h d'attente sur place",
          "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
      },
      {
          "name": "Prefecture Bobigny",
          "email": "6 allé de la justice, 93150",
          "position": "2h d'attente sur place",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
      },
      {
          "name": "Commissariat 75012",
          "email": "25 rue Paul vaillant couturier",
          "position": "Fermée pour Travaux exceptionnel",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
      }
  ]
  }


  return (
<View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:60
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"80%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});
