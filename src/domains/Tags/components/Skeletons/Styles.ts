import { SxObject } from 'src/types/SxObject';
import { IS_DESKTOP } from 'src/constants/Styles';

export const Styles = SxObject({
  skeletonsContainer: {
    marginTop: '-24px',
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'wrap',
    marginLeft: '-24px',
    width: 'calc(100% + 24px)'
  },
  skeletonContainer: {
    flexDirection: 'column',
    display: 'flex',
    flexBasis: {
      xs: `calc(100% / 2)`,
      sm: `calc(100% / 3)`,
      md: `calc(100% / 5)`
    },
    paddingLeft: '24px',
    paddingTop: '24px',
    '& > *': {
      width: '100%',
      background: '#333 !important',
      transform: 'none !important'
    }
  },
  skeletonBox: {
    height: 0,
    paddingTop: '100%'
  },
  skeletonName: {
    marginTop: '15px',
    height: '12px',
    marginBottom: '5px',
    width: '85%'
  },
  skeletonCount: {
    marginTop: '5px',
    height: '9px',
    marginBottom: '3px',
    width: '50%',
    [IS_DESKTOP]: {
      marginBottom: '15px'
    }
  }
});
