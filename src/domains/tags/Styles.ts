import { SxObject } from 'src/types/SxObject';
import { IS_DESKTOP } from 'src/constants/Styles';

export const Styles = SxObject({
  root: {
    color: '#fff',
    paddingLeft: '5px',
    paddingRight: '6px',
    [IS_DESKTOP]: {
      padding: 0
    }
  },
  topSection: {
    marginTop: '20px',
    marginBottom: '24px',
    '& > *': {
      lineHeight: '150%',
      fontSize: '24px !important',
      letterSpacing: '0.25px'
    },
    [IS_DESKTOP]: {
      marginTop: '80px',
      '& > *': {
        fontSize: '30px !important'
      }
    }
  },
  tagsContainer: {
    marginTop: '-24px',
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'wrap',
    marginLeft: '-24px',
    width: 'calc(100% + 24px)'
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
    width: '100%'
  },
  tagBoxContainer: {
    height: 0,
    paddingTop: '100%',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.06)',
    position: 'relative'
  },
  tagBox: {
    position: 'absolute',
    border: '4px solid #fff',
    borderRadius: '8px',
    left: 10,
    bottom: 14,
    '& > *': {
      fontSize: '24px',
      letterSpacing: 0,
      fontWeight: 700,
      lineHeight: '150%',
      margin: '3px 10px',
      whiteSpace: 'nowrap',
      maxWidth: '107px',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  },
  tagName: {
    fontSize: '14.9px',
    lineHeight: '22px',
    marginTop: '10px',
    letterSpacing: '0.14px',
    whiteSpace: 'nowrap',
    maxWidth: '150px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  tagCount: {
    fontSize: '11.7px',
    lineHeight: '17px',
    letterSpacing: '0.37px',
    color: '#b2b2b2',
    [IS_DESKTOP]: {
      marginBottom: '12px'
    }
  }
});
