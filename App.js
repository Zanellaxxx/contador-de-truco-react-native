import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const apostas = [
  { label: 'Truco', pontos: 3, cor: '#e67e22' },
  { label: 'Seis', pontos: 6, cor: '#8e44ad' },
  { label: 'Nove', pontos: 9, cor: '#2980b9' },
  { label: 'Doze', pontos: 12, cor: '#c0392b' },
];

export default function App() {
  const [nos, setNos] = useState(0);
  const [eles, setEles] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Marcador</Text>

      <View style={styles.times}>
        <View style={styles.time}>
          <Text style={styles.timeNome}>Nós</Text>
          <Text style={styles.valor}>{nos}</Text>
          <View style={styles.linha}>
            <TouchableOpacity style={[styles.botao, styles.botaoMenos]} onPress={() => setNos(nos - 1)}>
              <Text style={styles.botaoTexto}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao, styles.botaoMais]} onPress={() => setNos(nos + 1)}>
              <Text style={styles.botaoTexto}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.apostas}>
            {apostas.map((a) => (
              <TouchableOpacity key={a.label} style={[styles.botaoAposta, { backgroundColor: a.cor }]} onPress={() => setNos(nos + a.pontos)}>
                <Text style={styles.botaoApostaTexto}>{a.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.divisor} />

        <View style={styles.time}>
          <Text style={styles.timeNome}>Eles</Text>
          <Text style={styles.valor}>{eles}</Text>
          <View style={styles.linha}>
            <TouchableOpacity style={[styles.botao, styles.botaoMenos]} onPress={() => setEles(eles - 1)}>
              <Text style={styles.botaoTexto}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao, styles.botaoMais]} onPress={() => setEles(eles + 1)}>
              <Text style={styles.botaoTexto}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.apostas}>
            {apostas.map((a) => (
              <TouchableOpacity key={a.label} style={[styles.botaoAposta, { backgroundColor: a.cor }]} onPress={() => setEles(eles + a.pontos)}>
                <Text style={styles.botaoApostaTexto}>{a.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
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
    marginBottom: 40,
  },
  times: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  time: {
    alignItems: 'center',
    gap: 16,
  },
  timeNome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  valor: {
    fontSize: 64,
  },
  divisor: {
    width: 2,
    height: '80%',
    backgroundColor: '#ccc',
  },
  linha: {
    flexDirection: 'row',
    gap: 10,
  },
  botao: {
    width: 60,
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
  apostas: {
    gap: 8,
  },
  botaoAposta: {
    width: 130,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoApostaTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
