// styles & components
import { Styles as defaultSx } from './Styles';
import LoadingButton from '@mui/lab/LoadingButton';

// types
import { LoadMoreButtonProps } from '../../types';

export default function LoadMoreButtonContent({
  onClick,
  loading,
  loadingPosition = 'end',
  endIcon = <></>,
  variant = 'outlined',
  sx = {},
  disabled = false,
  label
}: LoadMoreButtonProps) {
  return (
    <LoadingButton
      onClick={onClick}
      loading={loading}
      loadingPosition={loadingPosition}
      endIcon={endIcon}
      variant={variant}
      sx={[defaultSx.root, sx]}
      disabled={disabled}
    >
      {label}
    </LoadingButton>
  );
}
