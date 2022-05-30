import { Grid } from '@mui/material'
import { CardComponent } from '../Components/Card'
import { Main } from '../Components/Main'
import { dataAPI } from '../services/DataServices'

export const AllCatsPages = () => {
    const {data: cats} = dataAPI.useFetchAllDataQuery(15)

    return (
        <Main>
            {cats && cats.map(cat => (
                <Grid item key={cat.id}>
                    <CardComponent 
                        cat={cat}
                    />
                </Grid>
            ))}
        </Main>
    )
}
