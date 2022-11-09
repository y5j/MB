import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, TextInput,  } from 'react-native-paper';



function MBHomeScreen() {
  return (
      <View style={fundo}>
        <Image style={capa} source={{ uri: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2022/10/imagine-dragons-show-brasil-capa-01.jpg'}} />
        <Text style={titulo}>Imagine dragons</Text>
      </View>
  );
}

function MBSobreScreen() {
  return (
    <ScrollView>
    <View style={fundodois}>
      <Image style={capasobre} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-lvn36Jo9kci3WTCCVCYFzniAldttud1Rw&usqp=CAU'}} />
      <Text style={biografia}>A banda Imagine Dragons está na estrada desde 2008 tocando um indie rock. Tudo começou quando Dan Reynolds conheceu o ex-integrante Andrew Tolman em Las Vegas, nos Estados Unidos.
      Após se conhecerem na universidade, os músicos decidiram, no mesmo ano, lançar um EP que levava o nome do grupo. Hell and Silence EP, chegou às lojas em 2010, ambos foram gravados na Battle Born Studios. Em 2011, lançaram o EP It's Time, e logo depois assinaram um contrato de gravação com a Interscope Records. O nome da banda é um anagrama, segundo explica o guitarrista Wayne Sermon: “Nós tínhamos essa frase, mas não queríamos chamar a banda assim, então concordamos em mudar as letras de lugar e surgiu Imagine Dragons. Nós não dissemos sequer a nossas mães o que era a frase. Como artista você coloca tanto de si mesmo para fora, que é divertido ter alguma que você mantenha em segredo”. A primeira grande aparição aconteceu quando o vocalista da banda Train adoeceu pouco antes do Bite of Las Vegas Festival de 2010 e então o Imagine Dragons foi convidado para preencher o lineup, se apresentando para uma multidão de mais de 26.000 pessoas. Nesta época, venceram várias premiações locais, incluindo “Melhor CD de 2011″ (Las Vegas SEVEN Magazine), “Best local Indie Band 2010″ (Las Vegas Weekly), entre outros que levaram a banda à uma trajetória positiva. O primeiro disco de estúdio da banda, nomeado Night Visions, chegou em setembro de 2012. O álbum alcançou a segunda posição na Billboard 200, com vendas na primeira semana de mais de 83.000 de cópias. Fora isso, também atingiu a primeira posição na Billboard Alternative e Rock Album, e ficou entre as dez melhores posições nas paradas austríacas, canadenses, alemãs, entre outras. Na época, a Billboard listou a banda como uma das "Novas estrelas mais brilhantes de 2012". O grupo saiu em turnê por diversos países, finalizando em 2014 com um show durante o Lollapalooza no Brasil. Foi durante essa série de shows que canções para um segundo álbum começaram a ser escritas. Em outubro de 2014 foi revelado o primeiro single do novo disco, a canção "I Bet My Life". Em seguida, o disco Smoke and Mirrors foi lançado nos nos Estados Unidos no dia 17 de fevereiro de 2015, chegando ao topo das paradas dos mais vendidos por lá e também no Reino Unido. Em de fevereiro de 2017, a banda lançou "Believer" como o primeiro single de seu terceiro álbum. "Believer" foi usado como parte do anúncio do Super Bowl para o Nintendo Switch. Seguindo a divulgação de um novo material, em abril o Imagine Dragons lançou "Thunder" como o segundo single de seu terceiro álbum. Envolve, chegou foi anunciado em maio, juntamente a uma nova faixa, "Whatever It Takes", lançada no mesmo dia. O álbum alcançou o top cinco na maioria dos países, mas recebeu críticas mistas dos críticos. Atualmente, a banda é composta por Dan Reynolds, Ben McKee, Wayne "Wing" Sermon e Dan Platzman.
      </Text>
    </View>
    </ScrollView>
  );
}

function MBAlbunsScreen() {
  return (
    <View style={fundotres}>
      <Text style={faixas}>1- Speak to Me</Text>
      <Text style={faixas}>2- Imagine Dragons</Text>
      <Text style={faixas}>3- Hell and Silence</Text>
      <Text style={faixas}>4- Continued Silence EP</Text>
      <Text style={faixas}>5- Night Visions</Text>
      <Text style={faixas}>6- Hear Me EP</Text>
      <Text style={faixas}>7- The Archive</Text>
      <Text style={faixas}>8- Live at Independent Records</Text>
      <Text style={faixas}>9- ITunes Session</Text>
      <Text style={faixas}>10- Imagine Dragons Live: London Sessions</Text>
    </View>
  );
}

function MBContatoScreen() {
  return (
    <View style={fundotres}>
      <TextInput style={campos} label="Email"></TextInput>
      <TextInput style={campos} label="Email"></TextInput>
      <TextInput style={campos} label="Email"></TextInput>
      <TextInput style={campos} label="Email"></TextInput>
      <Button style={botão} label="Enviar">Enviar</Button>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Bem Vindos" component={MBHomeScreen} />
        <Tab.Screen name="Biografia" component={MBSobreScreen} />
        <Tab.Screen name="Faixas" component={MBAlbunsScreen} />
        <Tab.Screen name="Contato" component={MBContatoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const fundo = {
  backgroundColor: "#000000",
  height: "120%",
  display: "flex",
  alignItems: "center"
}
const fundodois = {
    backgroundColor: "#ff6961",
    height: "120%",
    display: "flex",
    alignItems: "center"
}
const titulo = {
    marginTop: "-170px",
    textAlign: "center",
    fontSize: "40px",
    zIndex: "5",
    color: "red"
}
const capa = {
    height: "700px", 
    width: "100%"
}
const capasobre = {
  height: "150px", 
  width: "100%"
}
const biografia = {
  padding: "20px",
  width: "80%",
  height: "1170px"
}
const fundotres = {
  backgroundColor: "#000000",
  height: "120%",
  display: "flex",
  alignItems: "center",
  paddingTop: "100px"
}
const faixas = {
  width: "50%",
  color: "white",
  fontSize: "20px"
}
const campos = {
  height: "50px", 
  width: "60%",
  zIndex: "5",
  margin: "10px",
}
const botão = {
  height: "50px", 
  width: "60%",
  zIndex: "5",
  margin: "10px",
  backgroundColor: "red",
  padding: "5px"
}
const titulodois = {
  marginTop: "160px",
  textAlign: "center",
  fontSize: "40px",
  zIndex: "5",
  color: "white"
}