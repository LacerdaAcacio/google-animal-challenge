import React, { SetStateAction } from 'react';

import { TableHeaderDiv, TableTitle, ExpandTableIcon, CollapseTableIcon } from './styles';

interface TableTitleAndCollapseProps {
  isTableExpanded?: boolean;
  setIsTableExpanded: SetStateAction<any>;
  tableTitle?: string;
}

export const TableTitleAndCollapse = ({
  setIsTableExpanded,
  tableTitle,
  isTableExpanded,
}: TableTitleAndCollapseProps) => {
  const hasTableTitle = tableTitle && typeof tableTitle === 'string';
  return (
    <TableHeaderDiv>
      {hasTableTitle && <TableTitle>{tableTitle}</TableTitle>}
      {isTableExpanded && <ExpandTableIcon onClick={() => setIsTableExpanded(false)} />}
      {isTableExpanded === false && (
        <>
          <TableTitle /> <CollapseTableIcon onClick={() => setIsTableExpanded(true)} />
        </>
      )}
    </TableHeaderDiv>
  );
};
