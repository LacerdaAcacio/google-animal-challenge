import React from 'react';
import { useTranslation } from 'react-i18next';

import { TableHeaderButtons } from '../styles';

interface TableHeaderFilterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  menuFilterlabel?: string;
  isBackgroundBlue?: boolean;
  icon?: React.SVGProps<SVGSVGElement>;
}

export const TableHeaderButton = ({ menuFilterlabel, icon, ...rest }: TableHeaderFilterButtonProps) => {
  const { t } = useTranslation();
  return (
    <TableHeaderButtons {...rest}>
      {icon}
      {menuFilterlabel || t('pages.register.contracts.filter')}
    </TableHeaderButtons>
  );
};
