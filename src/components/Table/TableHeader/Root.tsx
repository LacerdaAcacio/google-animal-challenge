import React, { ReactNode } from 'react';

import { Row } from 'antd';

import { SDetailsFilterContainer, TableHeaderDiv } from '../styles';

// interface TableHeaderRootProps extends React.HTMLAttributes<HTMLDivElement> {
//   children: ReactNode;
// }

interface TableHeaderRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const TableHeaderRoot = ({ children, ...rest }: TableHeaderRootProps) => {
  return (
    <SDetailsFilterContainer>
      {/* <Row> */}
      <TableHeaderDiv {...rest}>{children}</TableHeaderDiv>
      {/* </Row> */}
    </SDetailsFilterContainer>
  );
};
