import React from 'react';
import { Card, Container } from '@mui/material';
import { Bar } from './Components/Bar';
import { Main } from './Components/Main';
import { dataAPI } from './services/DataServices';

function App() {
  const {data: cats} = dataAPI.useFetchAllDataQuery('')

  console.log(cats);
  

  return (
    <Container maxWidth='xl'>
      <Bar/>
      <Main>
        <Card>
          CatCard
        </Card>
      </Main>
    </Container>
  );
}

export default App;
