import { Grid } from '@mui/material'
import { CardComponent } from '../Components/Card'
import { Main } from '../Components/Main'
import { useAppSelector } from '../hooks/redux'

export const FavoriteСats = () => {
    const cats = useAppSelector(state => state.addedSlice.data)

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
