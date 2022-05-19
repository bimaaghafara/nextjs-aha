import { SxObject } from 'src/types/SxObject';
import { IS_DESKTOP } from 'src/constants/Styles';

export const Styles = SxObject({
  skeletonsContainer: {
    marginLeft: '-34px',
    width: 'calc(100% + 34px)'
  },
  skeletonContainer: {
    paddingLeft: '34px !important'
  },
  skeletonImg: {
    background: '#333',
    height: 0,
    paddingTop: 'calc(100% * 222.67 / 335)',
    transform: 'none',
    [IS_DESKTOP]: {
      paddingTop: 'calc(100% * 146 / 219)'
    }
  },
  skeletonName: {
    background: '#333',
    height: '14px',
    transform: 'none',
    marginTop: '24.33px',
    marginBottom: '4px',
    width: '60%',
    [IS_DESKTOP]: {
      marginTop: '18px',
      marginBottom: '2px'
    }
  },
  skeletonUsername: {
    background: '#333',
    height: '8px',
    transform: 'none',
    marginTop: '8.75px',
    width: '45%',
    marginBottom: '12px',
    [IS_DESKTOP]: {
      marginBottom: '20px'
    }
  }
});
