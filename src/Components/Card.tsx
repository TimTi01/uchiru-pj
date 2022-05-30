import React, { FC, useState } from 'react'
import { Card, CardMedia, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IData } from '../services/DataServices';
import { useAppDispatch } from '../hooks/redux';
import { addFavoriteCat } from '../features/addedSlice';


interface ICardProps {
    cat: IData,
}

export const CardComponent:FC<ICardProps> = ({cat}) => {
    const dispatch = useAppDispatch()

    const addDataHandler = () => {
        setLike(!like)
        dispatch(addFavoriteCat(cat))
    }
    
    const [like, setLike] = useState(false)

    return (
        <Card elevation={0} 
              sx={{
                    position: 'relative',
                }} 
              square
        >
            <CardMedia
                component="img"
                sx={{
                    width: 225, 
                    height: 225
                }}
                image={cat.url}
            />
            <IconButton onClick={() => addDataHandler()}
                        sx={{    
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                        }}
            >
            {like 
                ? <FavoriteIcon color='warning'/>
                : <FavoriteBorderIcon color='warning'/>
            }
            </IconButton>
        </Card>
    )
}
