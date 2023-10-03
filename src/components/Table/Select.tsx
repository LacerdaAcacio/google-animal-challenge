import React from 'react';

import { SelectProps } from 'components/Select/types';

import { CustomizedSelect } from './styles';

export default function TableSelect({ ...rest }: SelectProps) {
  return <CustomizedSelect {...rest} />;
}
