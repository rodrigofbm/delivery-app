import React, {useState, useEffect } from "react";
import { SafeAreaView, Button, View, Text, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import StyledInput from "../components/StyledInput";
const app = axios.create({
  baseURL: 'https://delivery.leaderaplicativos.com.br/api',
  timeout: 1000,
  //headers: {'X-Custom-Header': 'foobar'}
});

const Login = ({ navigation }) => {
  const [email, onChangeEmail] = useState('usuario@teste.com');
  const [password, onChangePassword] = useState('usuario_test_@@');
  const [errors, onChangeErrors] = useState([]);
  const [isLoading, onChangeIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem('@USER_TOKEN');
      if(token !== null) {
        navigation.replace('Main');
      }
    } catch(e) {
      // error reading value
    }
  }

  const makeLogin = () => {
    onChangeErrors([]);
    
    if(!email) {
      onChangeErrors( oldMgs => [...oldMgs, {msg: 'Por favor, forneça um e-mail'}]);
      return;
    }

    if(!password) {
      onChangeErrors( oldMgs => [...oldMgs, {msg: 'Por favor, forneça uma senha'}]);
      return;
    }

    onChangeIsLoading(true);

    app.post('https://delivery.leaderaplicativos.com.br/api/api-token-auth/', {
      email,
      password
    }).then( async (resp) => {
      try {
        await AsyncStorage.setItem('@USER_TOKEN', resp.data.token);
        navigation.replace('Main');
      } catch (e) {
        // saving error
      }
      onChangeIsLoading(false);
    }).catch(e => {
      onChangeIsLoading(false);
      onChangeErrors( oldMgs => [...oldMgs, {msg: 'Credenciais inválidas'}]);
    });
  }

  const displayErrors = () => {
    return (<View style={{marginTop: 10}}>
      {errors?.map(error => {
        return <Text key={error.msg} style={{color: 'black'}}>{error.msg}</Text>
      })}
    </View>);
  }

  const displayButton = () => {
    if(isLoading) {
      return <ActivityIndicator size='large' color='blue' />
    }

    return <Button
      onPress={() => makeLogin()}
      title="Entrar"
    />
  }

  return (
    <SafeAreaView style={{flex:1, padding: 20, justifyContent: 'center', backgroundColor: '#DDD'}}>
      <StyledInput
        keyboardType="email-address"
        iconName="ios-at"
        placeholder="Email"
        value={email}
        onChange={onChangeEmail}
      />

      <StyledInput
        iconName="lock-closed-outline"
        placeholder="Senha"
        value={password}
        secureTextEntry
        onChange={onChangePassword}
      />

      <View style={{marginTop: 20}}>
        {displayButton()}
      </View>
      {errors.length > 0 && displayErrors()}
    </SafeAreaView>
  );
};

export default Login;