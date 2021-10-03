import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';

export default function ModalScreen() {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      DenominationSocial: '',
      Adresse: ''
    }
  }); 
  const onSubmit = (data:any) => {
    console.log("je viens de cliquer sur valider")
    console.log(data);
  };

  const onChange = (arg:any) => {

    return {
      value: arg.nativeEvent.text,
    };
  };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dénomination Social</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="DenominationSocial"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Adresse</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="Adresse"
        rules={{ required: true }}
      />

      <View style={styles.button}>
        <Button
         color="#FFFFFF"
          title="Effacer"
          onPress={() => {
            reset({
              DenominationSocial: '',
              Adresse: ''
            })
          }}
        />
      </View>

      <View style={styles.button}>
        <Button
          color="#FFFFFF"
          title="Valider"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});