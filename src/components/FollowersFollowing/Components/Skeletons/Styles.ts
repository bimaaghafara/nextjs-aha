import { SxObject } from 'src/types/SxObject';

export const Styles = SxObject({
  skeletonsContainer: {
    width: '100%',
    padding: 0,
    '& .MuiSkeleton-root': {
      background: '#333',
      transform: 'none'
    }
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: '16px',
    '& .MuiListItemSecondaryAction-root .MuiSkeleton-root': {
      borderRadius: '20px',
      width: '76px',
      height: '28px'
    }
  },
  avatar: {
    borderRadius: '5px',
    '& .MuiSkeleton-root': {
      width: '40px',
      height: '40px'
    }
  },
  text: {
    margin: 0,
    '& .MuiListItemText-primary': {
      width: '55%',
      height: '24px',
      paddingTop: '5px',
      '& .MuiSkeleton-root': {
        height: '14px'
      }
    },
    '& .MuiListItemText-secondary': {
      width: '40%',
      height: '21px',
      paddingTop: '5px',
      '& .MuiSkeleton-root': {
        height: '11px'
      }
    }
  }
});
