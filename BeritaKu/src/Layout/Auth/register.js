import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { Typography } from '@Components/Common';
import { GlobalStyles } from '@Constant/style';
import Form from '@Components/Auth/Form';
import { SetFormRegister } from '@Config/Redux/Action';

export const RegisterLayout = ({ setFormRegister, formRegister }) => {
  const navigation = useNavigation();
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleClickButton = () => {
    if (confirmPassword !== formRegister.password) {
      console.log('Password tidak sama');
    } else {
      console.log(formRegister);
      navigation.navigate('ChosePlan');
    }
  };
  return (
    <SafeAreaView style={[GlobalStyles.Wrapper, GlobalStyles.Container, GlobalStyles.BetweenContent]}>
      <View>
        <Typography color="#222222" type="SemiBold" size={32}>Daftar Untuk Menjadi Member</Typography>
        <Form
          changeName={(value) => setFormRegister({ ...formRegister, name: value })}
          changeEmail={(value) => setFormRegister({ ...formRegister, email: value })}
          changePassword={(value) => setFormRegister({ ...formRegister, password: value })}
          changeConfirmPassword={(value) => setConfirmPassword(value)}
          isRegister
          onPress={() => navigation.navigate('Auth')}
        />
      </View>
      <Button color="#F71530" onPress={handleClickButton} uppercase={false} mode="contained">Selanjutnya</Button>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  formRegister: state.registerForm,
});

const mapDispatchToProps = dispatch => ({
  setFormRegister: data => dispatch(SetFormRegister(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterLayout);
