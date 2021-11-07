/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

import { GlobalStyles } from '@Constant/style';

import { ContentImage, Header } from '@Components/DetailContent';
import { getNewsById } from '@Repository/HomeRepository';
import { convertDate } from '@Utils/convertDate';

export const DetailNewsLayout = () => {
  const route = useRoute();
  const { id } = route.params;

  const [detailModel, setDetailModel] = useState({
    author: null,
    body: null,
    created_at: null,
    email: null,
    id: null,
    title: null,
    user_id: null,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getNewsById(id);
      if (response) {
        const { result } = response.data;
        setDetailModel({ ...detailModel, ...result });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <SafeAreaView style={[GlobalStyles.Wrapper, GlobalStyles.Container]}>
      <ScrollView>
        <Header
          title={detailModel.title}
          name={detailModel.author}
          date={convertDate(detailModel.created_at)}
        />
        <ContentImage name={detailModel.author} />
        <Paragraph>
          {detailModel.body}
        </Paragraph>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailNewsLayout;
