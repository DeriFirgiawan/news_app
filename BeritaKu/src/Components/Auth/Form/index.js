/* eslint-disable react-native/no-inline-styles */
import { Typography } from '@Components/Common';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { TextInput } from 'react-native-paper';

export const Form = ({
  isRegister = false,
  onPress,
  changeEmail,
  changeName,
  changePassword,
  changeConfirmPassword,
  isPassword,
  isCompare,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirPassword, setConfirmPassword] = useState(true);

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const handleShowConfirmPassword = () => {
    if (showConfirPassword) {
      setConfirmPassword(false);
    } else {
      setConfirmPassword(true);
    }
  };

  return (
    <View style={{paddingTop: 42}}>
      {
        isRegister ? (
          <TextInput
            mode="outlined"
            activeOutlineColor="#1976D2"
            focusable
            style={styles.styleInput}
            label="Nama Media"
            onChangeText={changeName}
          />
        ) : null
      }

      <TextInput
        mode="outlined"
        activeOutlineColor="#1976D2"
        focusable
        keyboardType="email-address"
        style={styles.styleInput}
        label="E-mail Address"
        onChangeText={changeEmail}
      />

      <TextInput
        mode="outlined"
        style={styles.styleInput}
        activeOutlineColor="#1976D2"
        label="Password"
        keyboardType="default"
        secureTextEntry={showPassword}
        onChangeText={changePassword}
        right={<TextInput.Icon name={showPassword ? 'eye-off' : 'eye'} onPress={handleShowPassword} color="rgba(0, 0, 0, 0.37)" />}
        error={isPassword}
      />
      {
        isRegister ? (
          <TextInput
            mode="outlined"
            style={styles.styleInput}
            activeOutlineColor="#1976D2"
            label="Ulangi Password"
            secureTextEntry={showConfirPassword}
            onChangeText={changeConfirmPassword}
            right={<TextInput.Icon name={showConfirPassword ? 'eye-off' : 'eye'} onPress={handleShowConfirmPassword} color="rgba(0, 0, 0, 0.37)" />}
            error={isCompare}
          />
        ) : null
      }
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {
          isPassword ? (
            <Typography size={14} color="#F71530">
              Email / Password Salah
            </Typography>
          ) : null
        }
        <TouchableOpacity onPress={onPress}>
          <Typography classes={{ marginLeft: 'auto' }} size={14}>
            {
              isRegister ? 'Sudah punya akun ?' : 'Belum punya akun ?'
            }
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  styleInput: { backgroundColor: '#fff', paddingBottom: 16},
});
