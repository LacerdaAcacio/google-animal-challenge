import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { FormItemProps } from 'antd/lib/form/FormItem';
import Button from 'components/Button';
import FormItem from 'components/FormItem';

import { SContentDiv } from '../../../styles/styles';
import { SearchInput } from '../styles';
import { SContentDiv } from 'styles/styles';

interface TableHeaderSearchProps extends FormItemProps {
  searchPlaceholder?: string;
  onClick?: () => void;
}

export const TableHeaderSearch = ({ searchPlaceholder, onClick, ...rest }: TableHeaderSearchProps) => {
  return (
<<<<<<< Updated upstream
=======
    // <>
>>>>>>> Stashed changes
    <SContentDiv>
      <FormItem {...rest}>
        <SearchInput placeholder={searchPlaceholder ?? ''} />
      </FormItem>
      <FormItem label="" className="form-item-without-label">
        <Button onClick={onClick} status="primary" text="uppercase" htmlType="submit">
          <FaSearch />
        </Button>
      </FormItem>
    </SContentDiv>
<<<<<<< Updated upstream
=======
    // </>
>>>>>>> Stashed changes
  );
};
