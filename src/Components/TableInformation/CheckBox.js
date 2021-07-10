import React from 'react'
import { Fragment } from 'react'
import { Component } from 'react'
class CheckBox extends Component {
  constructor () {
    super()
    this.state = {
      subjects: [
        { name: 'dbms', checked: false },
        { name: 'os', checked: false },
        { name: 'cd', checked: false },
        { name: 'java', checked: false }
      ],
      favSub: []
    }
  }
  checkboxHandler = (event, i) => {
    // let name = event.target.name
    let subjects = [...this.state.subjects]
    subjects[i] = { ...subjects[i], checked: !subjects[i].checked }
    let checkedSubjects = []
    // if (subjects[i].checked) {
    //   favSub.push(name)
    // } else {
    //   if (favSub.length > 0  ) {
    //     for (let j = 0; j < favSub.length; j++) {
    //       if (name === favSub[j]) {
    //         let index = j
    //         favSub.splice(index, 1)
    //       }
    //     }
    //   }
    // }
    subjects.map((subject, i) => {
      if (subject.checked) {
        checkedSubjects.push(subject.name)
      }
    })
    this.setState({
      subjects,
      favSub : checkedSubjects
  })
  }
  render () {
    return (
      <Fragment>
        {this.state.subjects.map((subject, i) => {
          return (
            <Fragment>
              <input
                type='checkbox'
                name={subject.name}
                onChange={event => this.checkboxHandler(event, i)}
              />
              <label>{subject.name}</label>
            </Fragment>
          )
        })}
        {
          this.state.favSub.map((x,i)=>{
            return(
              <div>
                <h1>{x}</h1>
              </div>
            )
          })
        }
      </Fragment>
    )
  }
}
export default CheckBox
