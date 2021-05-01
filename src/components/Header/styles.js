import React from 'react'
import { makeStyles } from '@material-ui/styles'

export default makeStyles((theme) => ({
    root: {
    flexGrow: 1
  },
  toolbar: {
        backgroundColor: '#000'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))