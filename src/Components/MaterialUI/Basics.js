import React, { Component} from 'react';
// import './Basics.css';
// import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'
// import TextField from '@material-ui/core/TextField'
import {
  Paper,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  withStyles,
  makeStyles
} from '@material-ui/core'
const applyStyles = {
    sideMenu : {
        display : "flex",
        flexDirection : "column",
        left : "0px",
        width : "120px",
        height : "100px",
        backgroundColor : "blue"
    },
    dropMenu :{
    }
}
class Basics extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      exercises : [{id : 1,title :"abc"},{id: 2 ,title :"cde"}]
    }
  }
  handleChange = event => {
    let name = event.target.name
    let value = event.target.value
    this.setState({
      [name]: value
    })
  }
  addListItems=()=>{
      let exercises = [...this.state.exercises];
      exercises.push({id : exercises.length+1,title : this.state.title});
      this.setState({
        exercises : exercises,
        title : ""
      }) 
  }
  render () {
    const {title,exercises} = this.state
    const {classes} = this.props
        return (         
      <Paper>
        <Typography variant='display1' align='center' gutterBottom>
          Exercises
        </Typography>
        <form>
          <TextField
            name='title'
            label='Exercise'
            value={title}
            onChange={this.handleChange}
            margin='normal'
          />
          <Button variant='raised' color='primary' onClick={this.addListItems}>
            Create
          </Button>
        </form>
        <List>
          {exercises.map(({id,title}) => (
            <ListItem key={id}>
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
        <div className={classes.sideMenu}>hi</div>
      </Paper>
    )
  }
}
export default withStyles(applyStyles)(Basics);
