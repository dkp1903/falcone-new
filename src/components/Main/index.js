import React from 'react'
import { Grid } from '@material-ui/core'
import Header from '../Header'

const Main = () => {
    return (
        <Grid container direction="column">
            <Header />
            <Grid item>
                Header come shere
            </Grid>
            <Grid item container>
                <Grid item xs={0} sm={2}/> { /* Padding*/}
                <Grid item xs={12} sm={8}>
                    Content comes here
                </Grid>
                <Grid item xs={0} sm={2} /> { /* Padding*/}
            </Grid>
        </Grid>
    )
}

export default Main
