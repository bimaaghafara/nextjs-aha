import { SystemStyleObject } from '@mui/system/styleFunctionSx';
import { Theme } from '@mui/material/styles';

export type LoadMoreButtonProps = {
  onClick: () => void;
  loading: boolean;
  loadingPosition?: 'end' | 'start' | 'center' | undefined;
  endIcon?: React.ReactNode;
  variant?: 'text' | 'contained' | 'outlined' | undefined;
  sx?: boolean | SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>);
  disabled?: boolean;
  label: string;
};
