import React from 'react';
import { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const BarraNavegacion = () => {
    return (
        <Fragment>

            <AppBar position="fixed" color="primary">
              <Toolbar>
                <Typography variant="h6">
                  <img src="logo-header.png" alt="logo-la-vieja-guardia"/>
                </Typography>
              </Toolbar>
            </AppBar>


        </Fragment>
     );
}
 
export default BarraNavegacion;
