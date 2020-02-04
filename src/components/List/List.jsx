import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import DeleteIcon from '@material-ui/icons/Delete'
import { Divider } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
  text: {
    color: 'black',
  },
}))

export const ListadoPersonas = ({ personas }) => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {personas.map(persona => {
        const labelId = `checkbox-list-secondary-label-${persona}`
        return (
          <>
            <ListItem key={persona.id}>
              <ListItemAvatar>
                <Avatar alt={`Avatar n°${persona + 1}`} src={`/static/images/avatar/${persona + 1}.jpg`} />
              </ListItemAvatar>
              <ListItemText className={classes.text} id={labelId} primary={persona.nombre} />
              <ListItemSecondaryAction>
                <DeleteIcon onClick={() => console.log('borrar')} color="primary" />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </>
        )
      })}
    </List>
  )
}
