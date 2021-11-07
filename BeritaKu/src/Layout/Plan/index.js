/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Typography } from '@Components/Common';
import { GlobalStyles } from '@Constant/style';
import { SafeAreaView } from 'react-native';
import { PlanCard } from '@Components/Plan';
import { Button } from 'react-native-paper';
import { apiPostRegister } from '@Repository/AuthRepository';

export const PlanLayout = ({ formRegister }) => {
  const navigation = useNavigation();
  const [selectedPlan, setSelectedPlan] = useState();
  const dataPlan = [
    {
      plan: 'Gratis',
      price: '0',
      description: 'Dengan memilih Gratis kamu hanya mempunyai akun saja',
    },
    {
      plan: 'Bisnis',
      price: '300,000',
      description: 'Dengan memilih Bisnis kamu bisa membuat berita',
    },
  ];

  const handleClickRegister = async () => {
    let premiumUser;
    selectedPlan === 1 ? premiumUser = true : premiumUser = false;
    const { name, email, password } = formRegister;
    try {
      const request = await apiPostRegister(name, email, password, premiumUser);
      if (request) {
        console.log(request.data);
        navigation.navigate('Success');
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <SafeAreaView style={[GlobalStyles.Wrapper, GlobalStyles.Container, GlobalStyles.BetweenContent]}>
      <View>
        <Typography color="#222222" type="SemiBold" size={32}>Pilih Status Membermu</Typography>
        <View style={{marginTop: 24}}>
            {
              dataPlan.map((value, index) => {
                return (
                  <PlanCard
                    selected={selectedPlan === index}
                    onSelect={() => setSelectedPlan(index)}
                    key={index}
                    plan={value.plan}
                    price={value.price}
                    description={value.description} />
                );
              })
            }
        </View>
      </View>
      <Button mode="contained" color="#F71530" uppercase={false} onPress={handleClickRegister}>Daftar</Button>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  formRegister: state.registerForm,
});

export default connect(mapStateToProps, null)(PlanLayout);
