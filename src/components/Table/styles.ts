import { FaSearch } from 'react-icons/fa';

import {
  CloseOutlined,
  DownloadOutlined,
  PlusCircleOutlined,
  DownCircleOutlined,
  UpCircleOutlined,
  EditOutlined,
  DollarCircleOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Progress, Dropdown } from 'antd';
import styled from 'styled-components';

import { Input, Select } from '..';

export const ProgressBar = styled(Progress)`
  margin-bottom: 10px;
`;

export const NegotiationStatusSelect = styled(Select)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;
  width: 176px;
  height: 44px;
  background: #dbedff;
  border-radius: 12px;
  .ant-select-selection-item {
    background: #dbedff;
    border: 0px;
    font-family: 'Lato', sans-serif, Arial, Helvetica;
    font-style: normal;
    font-weight: 700;
    font-size: 16.5px;
    line-height: 28px;
    width: 120px;
    height: 28px;
    color: #004a96;
    align-items: center;
    justify-content: center;
  }
`;

export const CustomizedSelect = styled(Select)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 12px;

  width: 180px;
  background: #ffebe6;
  border-radius: 8px;
  justify-content: center;
  .ant-select-selection-item {
    background: #ffebe6;
    border: 0px;
    font-family: 'Lato', sans-serif, Arial, Helvetica;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    width: 180px;
    color: #bf2600;
    align-items: flex-start;
    justify-content: center;
  }
`;

const TableStates = {
  NORMAL: 'normal',
  COLLAPSED: 'collapsed',
  EXPANDED: 'expanded',
};

function getColumnSizeByState(state: string) {
  if (state === TableStates.EXPANDED) return '1fr';
  if (state === TableStates.COLLAPSED) return '0fr';
  return '1fr';
}

interface DetailsContainerProps {
  leftState?: string;
  rightState?: string;
}

export const DetailsContainer = styled.div<DetailsContainerProps>`
  display: grid;
  grid-template-columns: ${props =>
    `${getColumnSizeByState(props.leftState ?? '')} ${getColumnSizeByState(props.rightState ?? '')}`};
  column-gap: ${props =>
    props.leftState === TableStates.COLLAPSED || props.rightState === TableStates.COLLAPSED ? '0' : '14px'};
  width: 100%;
  padding: 5px 0;
  position: relative;
  align-items: flex-start;
  overflow: hidden;

  @media (max-width: 1430px) {
    grid-template-columns: 100%;
  }
`;
export const SearchInput = styled(Input)`
  padding: 0;
  margin: 0;
  min-width: 100%;
  font-family: 'Lato', sans-serif, Arial, Helvetica;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  border-bottom: 0px;

  .ant-input::placeholder {
    color: #85818e;
    font-family: 'Lato', sans-serif, Arial, Helvetica;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
`;
export const TableTitle = styled.h1`
  display: block;
  width: 100%;
  font-family: 'Lato', sans-serif, Arial, Helvetica;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: #004a96;
`;
interface TableWrapperProps {
  wrap?: boolean;
}

export const TableHeaderDiv = styled.div<TableWrapperProps>`
  padding: 25px 0px 0px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
  height: 60px;
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
`;

export const ClearFilterIcon = styled(CloseOutlined)`
  align-self: center;
  left: 20.83%;
  right: 20.83%;
  top: 20.83%;
  bottom: 20.83%;
  color: #004a96;
  margin-right: 10px;
`;

export const ExportFilesIcon = styled(DownloadOutlined)`
  margin-right: 10px;
`;

export const MenuFilterIcon = styled(MenuOutlined)`
  margin-right: 10px;
`;

export const PlusCircleIcon = styled(PlusCircleOutlined)`
  margin-right: 10px;
`;

export const ExpandTableIcon = styled(DownCircleOutlined)`
  left: 8.33%;
  right: 8.33%;
  top: 8.33%;
  bottom: 8.33%;
  color: #004a96;
  justify-self: end;
`;

export const ActionSearchIcon = styled(FaSearch)`
  left: 8.33%;
  right: 8.33%;
  top: 8.33%;
  bottom: 8.33%;
  color: #004a96;
  background-color: #ffffff;
  justify-self: center;
`;

export const CollapseTableIcon = styled(UpCircleOutlined)`
  left: 8.33%;
  right: 8.33%;
  top: 8.33%;
  bottom: 8.33%;
  color: #004a96;
  justify-self: end;
`;

export const PencilIcon = styled(EditOutlined)`
  left: 8.33%;
  right: 8.33%;
  top: 8.33%;
  bottom: 8.33%;
  margin-right: 10px;
  justify-self: self-start;
`;

export const DollarCircleIcon = styled(DollarCircleOutlined)`
  left: 8.33%;
  right: 8.33%;
  top: 8.33%;
  bottom: 8.33%;
  margin-right: 10px;
  justify-self: self-start;
`;

export const EllipsisAction = styled(Dropdown.Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #004a96;
  font-weight: 700;
  font-size: 16px;
  justify-self: center;
  align-self: center;
`;

export const ClearFilterButton = styled.button`
  white-space: nowrap;
  background: none;
  border: none;
  color: #004a96;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Lato', sans-serif, Arial, Helvetica;
  &:hover {
    cursor: pointer;
  }
`;

interface TableProps {
  isBackgroundBlue?: boolean;
}

export const TableHeaderButtons = styled.button<TableProps>`
  border: 1px solid #004a96;
  border-radius: 4px;
  white-space: nowrap;
  background: ${props => (props.isBackgroundBlue ? '#004A96' : '#FFFFFF')};
  color: ${props => (props.isBackgroundBlue ? '#FFFFFF' : '#004A96')};
  font-weight: 700;
  font-size: 16px;
  padding: 3px 40px;
  font-family: 'Lato', sans-serif, Arial, Helvetica;
  &:hover {
    cursor: pointer;
  }
`;

export const ClearFilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: flex-start;
`;

export const SHeader = styled.div`
  /* margin-bottom: 30px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 0px;
  gap: 32px;
  overflow: hidden;
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: #dbedff;
    border: 0px;
    width: 100%;
  }
`;

export const STitlePage = styled.h2`
  margin-bottom: 10px;
  color: ${({ theme: { colors } }) => colors.primary};
  font-family: 'Lato', sans-serif, Arial, Helvetica;
  font-size: 48px;
  line-height: 64px;
  font-weight: 600;
  width: 248px;
  height: 64px;
`;
export const SSubTitlePage = styled.h2`
  color: ${({ theme: { colors } }) => colors.primary};
  font-family: 'Lato', sans-serif, Arial, Helvetica;
  width: 137px;
  height: 32px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  white-space: nowrap;
`;

export const STitleTable = styled.h2`
  color: ${({ theme: { colors } }) => colors.primary};
  font-family: ${({ theme: { fonts } }) => fonts.primary};
  font-size: 18px;
  font-weight: 600;
`;

interface ContractsContainerProps {
  isCollapsed?: boolean;
}

export const ContractsContainer = styled.div<ContractsContainerProps>`
  ${props => (props.isCollapsed ? 'min-height: 300px' : 'height: 95px')};
  width: 100%;
  float: left;
  border: 1px solid #85818e;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  margin-top: 20px;

  .ant-table table {
    border-collapse: collapse;
    border-spacing: 0;
    font-family: 'Lato', sans-serif, Arial, Helvetica;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
  .ant-table-wrapper::before {
    margin-top: 30px;
  }
  .elGfjE .ant-table .ant-table-thead > tr > th,
  .elGfjE .ant-table.ant-table-middle .ant-table-thead > tr > th,
  .elGfjE .ant-table.ant-table-small .ant-table-thead > tr > th {
    font-family: 'Lato', sans-serif, Arial, Helvetica;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #004a96;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: #ffebe6;
    border: 0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    width: 100%;
    height: 26px;
    padding: 0px;
  }
  .form-secondary .form-item-without-label .ant-btn {
    margin: 0px;
  }
  .ant-table-pagination.ant-pagination {
    justify-content: end;
  }
  .ant-table-content::-webkit-scrollbar-thumb {
    background: #004a96;
    border-radius: 24px;
  }
  .ant-table-content::-webkit-scrollbar-track {
    background: #e4e3e6;
    border-radius: 24px;
  }
  .ant-btn {
    border: none;
  }
  .form-secondary .form-item-without-label {
    padding-top: 0px;
  }
  .ant-col {
    display: flex;
  }

  .elGfjE .ant-table .ant-table-thead > tr > th.ant-table-column-has-sorters,
  .elGfjE .ant-table.ant-table-middle .ant-table-thead > tr > th.ant-table-column-has-sorters,
  .elGfjE .ant-table.ant-table-small .ant-table-thead > tr > th.ant-table-column-has-sorters {
    padding: 0 7px;
  }
  .form-secondary .ant-form-item .ant-input-affix-wrapper {
    padding: 0px 10px;
  }

  .hrJLhv .ant-table .ant-table-thead > tr > th,
  .hrJLhv .ant-table.ant-table-middle .ant-table-thead > tr > th,
  .hrJLhv .ant-table.ant-table-small .ant-table-thead > tr > th {
    font-weight: 600;
    color: #004a96;
    font-family: 'Lato', sans-serif, Arial, Helvetica;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
  }

  body {
    height: 8px;
    background: #e4e3e6;
    scrollbar-color: #e4e3e6;
  }

  .ant-form-item-label > label {
    font-family: 'Lato', sans-serif, Arial, Helvetica;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #1c1a20;
  }

  div.wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;

    div.ant-row.ant-form-item {
      margin: 0;
      padding: 0;
    }
  }
`;

// export const ContractsContainer = styled.div<ContractsContainerProps>`
//   ${props => (props.isCollapsed ? 'height: 70px' : 'min-height: 300px')};
//   width: 100%;
//   float: left;
//   border: 1px solid #85818e;
//   border-radius: 8px;
//   position: relative;
//   overflow: hidden;
//   margin-top: 20px;

//   .ant-table table {
//     border-collapse: collapse;
//     border-spacing: 0;
//     font-family: 'Lato', sans-serif, Arial, Helvetica;
//     font-style: normal;
//     font-weight: 400;
//     font-size: 16px;
//   }
//   .ant-table-wrapper::before {
//     margin-top: 30px;
//   }
//   .elGfjE .ant-table .ant-table-thead > tr > th,
//   .elGfjE .ant-table.ant-table-middle .ant-table-thead > tr > th,
//   .elGfjE .ant-table.ant-table-small .ant-table-thead > tr > th {
//     font-family: 'Lato', sans-serif, Arial, Helvetica;
//     font-style: normal;
//     font-weight: 700;
//     font-size: 16px;
//     color: #004a96;
//   }
//   .ant-select:not(.ant-select-customize-input) .ant-select-selector {
//     background-color: #ffebe6;
//     border: 0px;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
//   }
//   .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
//     width: 100%;
//     height: 26px;
//     padding: 0px;
//   }
//   .form-secondary .form-item-without-label .ant-btn {
//     margin: 0px;
//   }
//   .ant-table-pagination.ant-pagination {
//     justify-content: end;
//   }
//   .ant-table-content::-webkit-scrollbar-thumb {
//     background: #004a96;
//     border-radius: 24px;
//   }
//   .ant-table-content::-webkit-scrollbar-track {
//     background: #e4e3e6;
//     border-radius: 24px;
//   }
//   .ant-btn {
//     border: none;
//   }
//   .form-secondary .form-item-without-label {
//     padding-top: 0px;
//   }
//   .ant-col {
//     display: flex;
//   }

//   .elGfjE .ant-table .ant-table-thead > tr > th.ant-table-column-has-sorters,
//   .elGfjE .ant-table.ant-table-middle .ant-table-thead > tr > th.ant-table-column-has-sorters,
//   .elGfjE .ant-table.ant-table-small .ant-table-thead > tr > th.ant-table-column-has-sorters {
//     padding: 0 7px;
//   }
//   .form-secondary .ant-form-item .ant-input-affix-wrapper {
//     padding: 0px 10px;
//   }

//   .hrJLhv .ant-table .ant-table-thead > tr > th,
//   .hrJLhv .ant-table.ant-table-middle .ant-table-thead > tr > th,
//   .hrJLhv .ant-table.ant-table-small .ant-table-thead > tr > th {
//     font-weight: 600;
//     color: #004a96;
//     font-family: 'Lato', sans-serif, Arial, Helvetica;
//     font-style: normal;
//     font-size: 16px;
//     line-height: 24px;
//   }

//   body {
//     height: 8px;
//     background: #e4e3e6;
//     scrollbar-color: #e4e3e6;
//   }

//   .ant-form-item-label > label {
//     font-family: 'Lato', sans-serif, Arial, Helvetica;
//     font-style: normal;
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 20px;
//     color: #1c1a20;
//   }

//   div.wrapper {
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     width: 100%;

//     div.ant-row.ant-form-item {
//       margin: 0;
//       padding: 0;
//     }
//   }
// `;

export const ActionOptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  font-family: 'Lato', sans-serif, Arial, Helvetica;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 700;
  color: #1c1a20;
  :hover {
    cursor: pointer;
    color: #004a96;
    background-color: #f0f0f0;
  }
`;

export const SDetailsFilterContainer = styled.div`
  padding: 10px 0 0 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  svg {
    margin: 0;
  }

  #filter-contracts,
  #filter-cprs {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;

    .ant-form-item-control-input {
      width: 100%;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-items: flex-start;
    }

    button {
      margin: 0 5px 0 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    svg {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 0;
    }
  }
`;

interface ContainerCollapseButtonProps {
  left?: boolean;
  right?: boolean;
}

export const ContainerCollapseButton = styled.span<ContainerCollapseButtonProps>`
  position: relative;
  height: 100%;
  width: 35px;
  cursor: pointer;
  z-index: 0;
  background: ${({ theme: { colors } }) => colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface TableWrapperProps {
  left?: boolean;
  right?: boolean;
}

export const TableWrapper = styled.div<TableWrapperProps>`
  display: grid;
  width: 100%;
  grid-template-columns: ${props => (props.right ? '35px calc(100% - 35px)' : 'calc(100% - 35px) 35px')};
`;

export const Table = styled.div`
  padding: 0 20px 10px 10px;
`;
