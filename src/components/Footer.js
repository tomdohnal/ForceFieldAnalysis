import { createComponent } from 'react-fela';

const footer = () => ({
  position: 'fixed',
  height: '130px',
  width: '100%',
  background: '#268bd2',
  bottom: 0,
  padding: '40px 16px',
});

export default createComponent(footer);
