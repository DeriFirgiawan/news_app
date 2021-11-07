/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { Typography } from '@Components/Common';
import { GlobalStyles } from '@Constant/style';
import { Button, Card } from 'react-native-paper';

export const BusinessContent = ({ changeTitle, changeBody, onPress }) => {
  return (
    <View style={GlobalStyles.Container}>
      <Typography size={24} type="SemiBold" color="#222222">Buat Berita</Typography>

      <Card style={{marginTop: 24}}>
        <Card.Content>
          <TextInput
            style={styles.InputStyle}
            placeholder="Tulis Judul Berita"
            numberOfLines={1}
            multiline={false}
            onChangeText={changeTitle}
          />
          <TextInput
            placeholder="Tulis isi berita"
            multiline={true}
            numberOfLines={10}
            style={styles.TextAreaStyle}
            onChangeText={changeBody}
          />
        </Card.Content>
      </Card>
      <Typography size={10} classes={{marginTop: 16}}>
        <Typography color="#FFC107">PERINGATAN: </Typography>
        Pastikan berita yang anda buat tidak mengandung berita <Typography type="Bold" color="red">Palsu</Typography>
      </Typography>
      <Button
        onPress={onPress}
        mode="contained"
        style={{marginTop: 16}}
        color="#F71530"
      >Posting Berita</Button>
    </View>
  );
};

export default BusinessContent;

const styles = StyleSheet.create({
  InputStyle: {
    fontFamily: 'Montserrat-SemiBold',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  TextAreaStyle: {textAlignVertical: 'top'},
});
