/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { Typography } from '@Components/Common';
import { Card } from 'react-native-paper';

export const PlanCard = ({ plan, price, description, onSelect, selected }) => {
  return (
    <Card style={{marginVertical: 16, backgroundColor: selected ? '#F71530' : '#fff'}} onPress={onSelect}>
      <Card.Content>
        <Typography
          size={24}
          color={ selected ? '#fff' : '#222222'}
          type="SemiBold">
            {plan} - <Typography type="Bold">Rp. {price} / bulan</Typography>
        </Typography>
        <Typography classes={{marginTop: 8}} color={selected ? '#fff' : '#222222'} size={12} type="Medium">{description}</Typography>
      </Card.Content>
    </Card>
  );
};

export default PlanCard;
