import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [pontos, setPontos] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Marcador</Text>
      <Text style={styles.valor}>{pontos}</Text>
      <View style={styles.linha}>
        <TouchableOpacity style={[styles.botao, styles.botaoMenos]} onPress={() => setPontos(pontos - 1)}>
          <Text style={styles.botaoTexto}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, styles.botaoMais]} onPress={() => setPontos(pontos + 1)}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  valor: {
    fontSize: 64,
    marginBottom: 30,
  },
  linha: {
    flexDirection: 'row',
    gap: 20,
  },
  botao: {
    width: 120,
    height: 60,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoMais: {
    backgroundColor: '#28a745',
  },
  botaoMenos: {
    backgroundColor: '#dc3545',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
});
