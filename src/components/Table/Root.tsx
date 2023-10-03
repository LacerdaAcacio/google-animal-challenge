import React, { ReactNode } from 'react';

import { Spin, SpinProps } from 'antd';

import { ContractsContainer, Table } from './styles';

interface TableRootProps extends SpinProps {
  children: ReactNode;
  isCollapsed?: boolean;
}

export const TableRoot = ({ children, isCollapsed, ...rest }: TableRootProps) => {
  return (
    <ContractsContainer isCollapsed={isCollapsed}>
      <Spin {...rest}>
        <Table>{children}</Table>
      </Spin>
    </ContractsContainer>
  );
};
