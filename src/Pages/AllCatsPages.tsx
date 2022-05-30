import { Button, Grid } from '@mui/material'
import { CardComponent } from '../Components/Card'
import { Main } from '../Components/Main'
import { dataAPI } from '../services/DataServices'
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

export const AllCatsPages = () => {
    const [limit, setLimit] = useState(15)
    const {data: cats, isLoading} = dataAPI.useFetchAllDataQuery(limit)

    return (
        <Main>
            <Grid item 
                  container
                  spacing={2}
                  justifyContent='center'
            >
                {cats && cats.map(cat => (
                    <Grid item key={cat.id}>
                        <CardComponent 
                            cat={cat}
                        />
                    </Grid>
                ))}

                {isLoading && <CircularProgress />}
            </Grid>
            <Grid item 
                  container
                  justifyContent='center'  
                  mt={2}    
            >
                <Grid item>
                    <Button variant='text' onClick={() => setLimit(limit + 15)}>
                        Добавить ещё котиков!
                    </Button>
                </Grid>
            </Grid>
        </Main>
    )
}
