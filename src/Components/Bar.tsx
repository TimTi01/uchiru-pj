import React from 'react'
import { AppBar, Button, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Bar = () => {
  const navigate = useNavigate()

  return (
    <>
      <AppBar>
        <Toolbar>
          <Button color='inherit' 
                  onClick={() => navigate('/')}
          >
            Все котики
          </Button>
          <Button color='inherit' 
                  onClick={() => navigate('favorite')}
          >
            Любимые котики
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}
