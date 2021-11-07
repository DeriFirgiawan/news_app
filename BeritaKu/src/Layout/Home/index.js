import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '@Constant/style';
import { SafeAreaView, View } from 'react-native';
import { getListNews, searchNews } from '@Repository/HomeRepository';

import { Navbar } from '@Components/Common';
import { SearchInput, CardContent, EmptyNews } from '@Components/Home';

export const HomeLayout = () => {
  const navigation = useNavigation();
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const res = await getListNews();
      const { result } = res.data;
      setListData(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeSearch = event => {
    const { text } = event.nativeEvent;

    searchNews(text)
    .then(response => {
      const { result } = response.data;
      setListData(result);
      console.log(result);
    }).catch(err => {
      console.log(err.response);
    });
  };
  return (
    <SafeAreaView style={GlobalStyles.Wrapper}>
      <Navbar>
        <SearchInput onChange={event => handleChangeSearch(event)} placeholder="Cari Berita" />
      </Navbar>
      <View>
        {
          listData.length === 0 ? (
            <EmptyNews />
          ) : listData.map((value, index) => {
            return (
              <CardContent
                key={index}
                title={value.title}
                subtitle={value.body}
                onPressed={() => navigation.navigate('DetailNews', { id: value.id })}
              />
            );
          })
        }
      </View>
    </SafeAreaView>
  );
};

export default HomeLayout;
