import React from 'react';
import { useTranslation } from 'react-i18next';

import { ClearFilterContainer, ClearFilterButton, ClearFilterIcon } from '../styles';

interface TableClearFilterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const TableClearFilterButton = ({ label, ...rest }: TableClearFilterButtonProps) => {
  const { t } = useTranslation();
  return (
    <>
      <ClearFilterContainer>
        <ClearFilterButton {...rest}>
          <ClearFilterIcon />
          {label || t('pages.register.barterOperation.buttonClearFilter')}
        </ClearFilterButton>
      </ClearFilterContainer>
    </>
  );
};
