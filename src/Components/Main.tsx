import React, { FC } from 'react'
import { Box } from '@mui/material'

interface MainProps {
    children: React.ReactNode
}

export const Main:FC<MainProps> = ({children}) => {

  return (
    <Box component='main'
            height='100vh'
            display='flex'
            flexWrap='wrap'
            mt={5}
            sx={{
            justifyContent: 'center',
            alignItems: 'center'
            }}
    >
        {children}
    </Box>
  )
}
