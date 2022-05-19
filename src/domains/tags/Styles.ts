import { SxObject } from 'src/types/SxObject';
import { IS_DESKTOP } from 'src/constants/Styles';

export const Styles = SxObject({
  root: {
    color: '#fff'
  },
  topSection: {
    marginTop: '20px',
    marginBottom: '24px',
    '& > *': {
      lineHeight: '150%',
      fontSize: '24px',
      letterSpacing: '0.25px'
    },
    [IS_DESKTOP]: {
      marginTop: '80px',
      '& > *': {
        fontSize: '30px'
      }
    }
  },
  tagsContainer: {
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'wrap',
    marginLeft: '-24px',
    width: 'calc(100% + 24px'
  },
  tagContainer: {
    display: 'flex',
    flexBasis: {
      xs: `calc(100% / 2)`,
      sm: `calc(100% / 3)`,
      md: `calc(100% / 5)`
    },
    paddingLeft: '24px',
    paddingTop: '24px'
  },
  tag: {
    background: '#eee',
    width: '100%'
  }
});
