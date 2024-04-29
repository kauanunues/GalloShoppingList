import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Link} from "expo-router";
export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
      <Image
        source={requestAnimationFrame("../assets/avatar.png")}
        style={styles.Image}
      />
      </View>
      <View style={styles.content}>
        <Text  style={styles.title}>Gallo Shopping List</Text>
        <Text style={styles.text}>
          Monte Sua lista de compras e não esqueça mais o que prescisa comprar ao sair de casa!
        </Text>
      </View>
      <Link style={styles.button}href={"/home"}>
      <Text> style={styles.buttonText} Acessar </Text>
      </Link>
      <StatusBar style="light" backgroundColor= '#000' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  imagecontainer:{
    flex:2 ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image :{
    width:230,
    height:230,
    borderRadius:115,
    resizeMode:'cover',
  
  },
  content:{
    felx:1,
    backgroundColor:'#dadada',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingHorizontal:'5%',
  },
  title:{
    fontSize: 30,
    fontWeigth
  },
  text:{
    color: 'gray',
    fontSize: 16,
  },
  button:{
    position: 'absolute',
    backgroundColor: '#000',
    borderRadius: 50,
    bottom: '15%',
    paddingVertical: 15,
    width: '60%',
    alingSelf: 'center',
    textAlign: 'center',
  },
  buttonText:{
    color: '#fff',
    fontSize: '',

  },
});
