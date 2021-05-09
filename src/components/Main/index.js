import React from 'react'
import { Grid } from '@material-ui/core'
import Header from '../Header'
import Body from '../Body'

const Main = () => {
    return (
        <Grid container direction="column">
           
            <Grid item>
                 <Header />
            </Grid>
            <Grid item container>
                <Grid item xs={0} sm={2}/> { /* Padding*/}
                <Grid item xs={12} sm={8}>
                    <Body />
                </Grid>
                <Grid item xs={0} sm={2} /> { /* Padding*/}
            </Grid>
        </Grid>
    )
}

export default Main
