import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import { Bar } from './Components/Bar';
import { Main } from './Components/Main';
import { dataAPI } from './services/DataServices';
import { CardComponent } from './Components/Card';

function App() {
  const {data: cats} = dataAPI.useFetchAllDataQuery(15)

  console.log(cats);
  
  return (
    <Container maxWidth='xl'>
      <Bar/>
      <Main>
        {cats && cats.map(cat => (
          <Grid item key={cat.id}>
            <CardComponent 
              cat={cat}
            />
          </Grid>
        ))}
      </Main>
    </Container>
  );
}

export default App;
