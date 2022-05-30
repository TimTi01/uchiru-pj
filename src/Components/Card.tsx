import React, { FC, useState } from 'react'
import { Card, CardMedia, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IData } from '../services/DataServices';

interface ICardProps {
    cat: IData,
}

export const CardComponent:FC<ICardProps> = ({cat}) => {
    const [like, setLike] = useState(false)

    const getId = () => {
        setLike(!like)
        console.log(cat.id);
    }

    return (
        <Card elevation={0} sx={{position: 'relative',}}>
            <CardMedia
                component="img"
                sx={{
                    width: 225, 
                    height: 225
                }}
                image={cat.url}
            />
            <IconButton onClick={() => getId()}
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
