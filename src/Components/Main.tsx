import React, { FC } from 'react'
import {Grid } from '@mui/material'

interface MainProps {
    children: React.ReactNode
}

export const Main:FC<MainProps> = ({children}) => {

  return (
    <Grid container 
          component='main'
          mt={2}
          spacing={2}
    >
      {children}
    </Grid>
  )
}
