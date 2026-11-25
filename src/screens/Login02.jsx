import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native';

class Login02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      senha: '',
      erro: ''
    };
  }

  handleLogin = () => {
    const { usuario, senha } = this.state;

    if( usuario === 'admin' && senha === '1234'){
        this.setState({ erro: ''})
        this.props.navigation.replace('Login02')
    }else{
        this.setState({ erro: 'Usuario ou senha invalidos.'})
    }
  }

  render() {
    const TAMANHO = 80;
    const { usuario, senha, erro } = this.state;
    return (
      <View style={styles.container}>
            <View style={ styles.bloco1 }></View>

             <View style={ styles.divisor }>
                <Image
                    source={ require('../../img/logo_barao.png')}
                    style={[
                        styles.imagem,
                        {
                            width: TAMANHO,
                            height: TAMANHO,
                            borderRadius: TAMANHO / 2,
                            top: -(TAMANHO) / 2,
                        }
                    ]}
                />
            </View> 

            <View style={ styles.bloco2 }>
                <Text style={styles.welcomeText}>Bem-vindo!</Text>
                <Text style={styles.subText}>Acesse sua conta</Text>
        
                <TextInput
                            style={ styles.input }
                            placeholder="Usuario (ex: admin)"
                            value={ usuario }
                            onChangeText={ (texto) => this.setState({ usuario: texto })}
                        />

                <TextInput
                            style={ styles.input }
                            placeholder="Senha (ex: 1234)"
                            value={ senha }
                            onChangeText={ (texto) => this.setState({ senha: texto })}
                        />

                        { erro !== '' && <Text style={ styles.erro }>{ erro} </Text>} 
                        
                                

                <TouchableOpacity style={styles.forgotPassword}>
                  <Text style={{color: '#000', textDecorationLine:'underline'}}>Esqueci minha senha</Text>
                </TouchableOpacity>

                <Button title='Entrar' onPress={this.handleLogin}/>

            </View>

            <View style={ styles.bloco3 }>
              <Text style={styles.footerText}>Ainda não tem conta? </Text>
              <TouchableOpacity>
                  <Text style={styles.linkText}>Cadastre-se</Text>
                </TouchableOpacity>

            </View>
      </View>
    );
  }
}

export default Login02;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  bloco1: {
    backgroundColor: 'black',
    width: '100%',
    height: 50,

  },

  bloco2: {
    flex: 1,
    width: '90%'

  },

  bloco3: {
    height: 80,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'

  },
  

  divisor: {
    height: 0,
    overflow: 'visible',
    zIndex: 10,

  },

  imagem: {
    position:'absolute',
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#ffff',
    backgroundColor: 'black',

  },

  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    marginTop: 60,
    textAlign: 'center',

  },

  subText: {
    fontSize: 28,
    color: '#555',
    marginBottom: 30,
    marginTop: 0,
    textAlign: 'center',  

  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#4caf50',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    color: 'black',

  },

  forgotPassword: {
    alignSelf: 'center',
    marginBottom: 30,

  },

  button: {
    width: '100%',
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems:'center',

  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',

  },

  footerText: {
    color:'#000',
    
  },

  linkText: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',

  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'

  },
  erro: {
    color: '#ff0000',
    marginBottom: 15,
    textAlign: 'center'
  },

});

