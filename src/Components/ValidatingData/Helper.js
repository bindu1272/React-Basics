import {
  VARIATIONS,
  TARGET_USERS,
  GRADES,
  BOARDS,
  APP_VERSIONS,
  ACADEMIC_YEARS
} from './sampleConst'
import React, { Fragment } from 'react'
const Helper = {
  getVariations: (variationCount, template2) => {
    return VARIATIONS.map((variation, i) => {
      if (variation <= variationCount) {
        return <Fragment>{template2()}</Fragment>
      }
    })
  },
  getTargetUsers: (targetUser, changeHandler) => {
    return TARGET_USERS.map((user, i) => {
      return (
        <Fragment>
          <input
            type='radio'
            id={user}
            name='targetUser'
            value={i}
            checked={targetUser === i ? true : false}
            onChange={changeHandler}
          />
          <label htmlFor={user}>{user}</label>
        </Fragment>
      )
    })
  },
  template: (grades, boards, academic_years, app_versions, changeHandler) => {
    return (
      <Fragment>
        <div className='a'>
          <label>Grades</label>
          <select onChange={changeHandler} value={grades} name='grades'>
            <option>Select Grades</option>
            {GRADES.map((grade, i) => {
              return <option value={grade}>{grade}</option>
            })}
          </select>
        </div>
        <div>
          <label>Boards</label>
          <select onChange={changeHandler} value={boards} name='boards'>
            <option>Select Boards</option>
            {BOARDS.map((board, i) => {
              return <option value={board}>{board}</option>
            })}
          </select>
        </div>
        <div>
          <label>Academic Years</label>
          <select
            onChange={changeHandler}
            value={academic_years}
            name='academic_years'
          >
            <option>Select Academic Years</option>
            {ACADEMIC_YEARS.map((year, i) => {
              return <option value={year}>{year}</option>
            })}
          </select>
        </div>
        <div>
          <label>App Versions</label>
          <select
            onChange={changeHandler}
            value={app_versions}
            name='app_versions'
          >
            <option>Select App Versions</option>
            {APP_VERSIONS.map((version, i) => {
              return <option value={version}>{version}</option>
            })}
          </select>
        </div>
      </Fragment>
    )
  }
}
export default Helper
