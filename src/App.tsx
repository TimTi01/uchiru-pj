import { Container } from '@mui/material';
import { Bar } from './Components/Bar';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from './hooks/redux';

function App() {
  const data = useAppSelector(state => state.addedSlice.data)
  console.log(data);

  return (
    <Container maxWidth='xl'>
      <Bar/>
      <Outlet/>
    </Container>
  );
}

export default App;
