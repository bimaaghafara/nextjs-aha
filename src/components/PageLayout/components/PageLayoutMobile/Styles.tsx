import { SxObject } from 'src/types/SxObject';

export const Styles = SxObject({
  root: {
    background: '#181818',
    minHeight: '100vh'
  },
  topSection: {
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px'
  },
  content: {
    flexGrow: 1,
    padding: '20px',
    paddingTop: '28px',
    paddingBottom: 0
  }
});
