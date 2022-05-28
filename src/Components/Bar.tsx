import React from 'react'
import { AppBar, Button, Toolbar } from '@mui/material';

export const Bar = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Button color='inherit'>Все котики</Button>
          <Button color='inherit'>Любимые котики</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}
