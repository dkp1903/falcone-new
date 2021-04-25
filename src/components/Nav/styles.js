import React from 'react'
import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
    flexGrow: 1
  },
  toolbar: {
        backgroundColor: '#212324'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))