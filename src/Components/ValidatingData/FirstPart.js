import React, { Component, Fragment } from 'react'
import './FirstPart.css'
import {
  TARGET_USERS,
  NAMES,
  VARIATIONS,
  GRADES,
  BOARDS,
  ACADEMIC_YEARS,
  APP_VERSIONS,
  DIMENSIONS,
  SPLIT_VARIATIONS,
  UID,
  GAID
} from './sampleConst'
class FirstPart extends Component {
  constructor () {
    super()
    this.state = {
      experimentName: null,
      targetUser: 1,
      variationCount: 0,
      grades: null,
      boards: '',
      app_versions: 0,
      academic_years: null,
      title: null,
      dimensions: 0,
      splitVariation: null,
      isEdit: false,
      bannerUrl: {
        bannerImageMobile: '',
        bannerImageWeb: '',
        redirectionLinkMobile: '',
        redirectionLinkWeb: ''
      },
      createBanner: false,
      banners: []
    }
  }
  changeHandler = event => {
    let name = event.target.name
    let value = event.target.value
    if (name === NAMES.TARGET_USER || name === NAMES.SPLIT_VARIATION) {
      value = parseInt(value)
    }
    this.setState({
      [name]: value
    })
  }
  bannerUrlHandler = event => {
    let name = event.target.name
    let value = event.target.value
    let bannerUrl = { ...this.state.bannerUrl }
    bannerUrl[name] = value
    this.setState({
      bannerUrl: bannerUrl
    })
  }
  template = () => {
    return (
      <Fragment>
        <div className='a'>
          <label>Grades</label>
          <select
            onChange={this.changeHandler}
            value={this.state.grades}
            name='grades'
          >
            <option>Select Grades</option>
            {GRADES.map((grade, i) => {
              return <option value={grade}>{grade}</option>
            })}
          </select>
        </div>
        <div>
          <label>Boards</label>
          <select
            onChange={this.changeHandler}
            value={this.state.boards}
            name='boards'
          >
            <option>Select Boards</option>
            {BOARDS.map((board, i) => {
              return <option value={board}>{board}</option>
            })}
          </select>
        </div>
        <div>
          <label>Academic Years</label>
          <select
            onChange={this.changeHandler}
            value={this.state.academic_years}
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
            onChange={this.changeHandler}
            value={this.state.app_versions}
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
  variationCount = () => {
    return (
      <div>
        <label>Set Number Of Variations </label>
        <select
          onChange={this.changeHandler}
          value={this.state.variationCount}
          name='variationCount'
        >
          <option value='0'>set number of variations</option>
          {VARIATIONS.map((variation, i) => {
            return <option value={variation}>{variation}</option>
          })}
        </select>
      </div>
    )
  }
  userIdVariation = () => {
    return (
      <Fragment>
        <div>
          <label>Split Variation By*</label>
          {SPLIT_VARIATIONS.map((splitvar, i) => {
            return (
              <Fragment>
                <input
                  type='radio'
                  id={splitvar}
                  name='splitVariation'
                  value={i}
                  onChange={this.changeHandler}
                />
                <label htmlFor={splitvar}>ending with {splitvar}</label>
              </Fragment>
            )
          })}
        </div>
        <label>Variation {this.state.splitVariation}</label>
        <button> Remove </button>
        <div>{this.splitVariation()}</div>
      </Fragment>
    )
  }
  splitVariation = () => {
    if (this.state.splitVariation != null) {
      return (
        <Fragment>
          <label>
            Ending with {SPLIT_VARIATIONS[this.state.splitVariation]} 
          </label>
          {SPLIT_VARIATIONS[this.state.splitVariation] === NAMES.UID
            ? UID.map((variationId, i) => {
                return (
                  <Fragment>
                    <input type='checkbox' value={variationId} id={i} />
                    <label htmlFor={variationId}>{variationId} </label>
                  </Fragment>
                )
              })
            : GAID.map((variationId, i) => {
                return (
                  <Fragment>
                    <input type='checkbox' value={variationId} id={i} />
                    <label htmlFor={variationId}>{variationId} </label>
                  </Fragment>
                )
              })}
        </Fragment>
      )
    }
  }
  template2 = () => {
    return (
      <Fragment>
        <div>
          <label>Title </label>
          <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <label>Dimension* </label>
          <select
            onChange={this.changeHandler}
            value={this.state.dimensions}
            name='dimensions'
          >
            <option value='0'>select Dimension</option>
            {DIMENSIONS.map((dimension, i) => {
              return <option value={dimension}>{dimension}</option>
            })}
          </select>
        </div>
        <table border='1'>
          <tr>
            <th>S.NO</th>
            <th>Banner Details </th>
            <th> Action </th>
          </tr>
          {this.state.banners.length === 0 ? (
            <tr>No data is there </tr>
          ) : (
            this.state.banners.map((banner, i) => {
              return (
                <Fragment>
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      Banner Image Url(Mobile) : {banner.bannerImageMobile}{' '}
                      <br />
                      Banner Image Url(web) : {banner.bannerImageWeb} <br />
                      Banner Image Url(Mobile) : {banner.redirectionLinkMobile}
                      <br />
                      Banner Image Url(web) : {banner.redirectionLinkWeb}
                    </td>
                    <td>
                      <button onClick={() => this.isEditValidation(i)}>
                        Edit
                      </button>
                      <button onClick={() => this.removeTemplate(i)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                </Fragment>
              )
            })
          )}
        </table>
        <button
          onClick={this.createBannerValidation}
          disabled={this.state.isEdit}
        >
          Add More Banners{' '}
        </button>
        {this.state.createBanner && this.createBanners()}
      </Fragment>
    )
  }
  isEditValidation = index => {
    let banners = [...this.state.banners]
    let bannerUrl = banners[index]
    bannerUrl['bannerIndex'] = index
    console.log(bannerUrl)
    this.setState({
      bannerUrl: bannerUrl,
      createBanner: true,
      isEdit: true
    })
  }
  createBannerValidation = () => {
    let bannerUrl = {
      bannerImageMobile: '',
      bannerImageWeb: '',
      redirectionLinkMobile: '',
      redirectionLinkWeb: ''
    }
    this.setState({
      createBanner: !this.state.createBanner,
      isEdit: false,
      bannerUrl: bannerUrl
    })
  }
  createBanners = () => {
    return (
      <form onSubmit={this.addTemplate}>
        <div>
          <label>Banner Image Url(Mobile)* </label>
          <input
            type='text'
            name='bannerImageMobile'
            value={this.state.bannerUrl.bannerImageMobile}
            onChange={this.bannerUrlHandler}
            required
          />
        </div>
        <div>
          <label>Redirection Deeplink(Mobile)* </label>
          <input
            type='text'
            name='redirectionLinkMobile'
            value={this.state.bannerUrl.redirectionLinkMobile}
            onChange={this.bannerUrlHandler}
            required
          />
        </div>
        <div>
          <label>Banner Image Url(Web)* </label>
          <input
            type='text'
            name='bannerImageWeb'
            value={this.state.bannerUrl.bannerImageWeb}
            onChange={this.bannerUrlHandler}
            required
          />
        </div>
        <div>
          <label>Redirection Deeplink(Web)* </label>
          <input
            type='text'
            name='redirectionLinkWeb'
            value={this.state.bannerUrl.redirectionLinkWeb}
            onChange={this.bannerUrlHandler}
            required
          />
        </div>
        <div>
          <button> {this.state.isEdit ? 'update' : 'create'} </button>
          <button onClick={this.createBannerValidation}>Cancel </button>
        </div>
      </form>
    )
  }
  addTemplate = event => {
    event.preventDefault()
    let banner = [...this.state.banners]
    if (this.state.bannerUrl.bannerIndex >= 0) {
      let bannerIndex = this.state.bannerUrl.bannerIndex
      banner[bannerIndex] = {
        ...banner[bannerIndex],
        bannerImageMobile: this.state.bannerUrl.bannerImageMobile,
        bannerImageWeb: this.state.bannerUrl.bannerImageWeb,
        redirectionLinkMobile: this.state.bannerUrl.redirectionLinkMobile,
        redirectionLinkWeb: this.state.bannerUrl.redirectionLinkWeb
      }
    } else {
      banner.push({
        bannerImageMobile: this.state.bannerUrl.bannerImageMobile,
        bannerImageWeb: this.state.bannerUrl.bannerImageWeb,
        redirectionLinkMobile: this.state.bannerUrl.redirectionLinkMobile,
        redirectionLinkWeb: this.state.bannerUrl.redirectionLinkWeb
      })
    }
    let bannerUrl = {
      bannerImageMobile: '',
      bannerImageWeb: '',
      redirectionLinkMobile: '',
      redirectionLinkWeb: ''
    }
    console.log('welcome', banner)
    this.setState({
      banners: banner,
      bannerUrl: bannerUrl,
      createBanner: !this.state.createBanner
    })
  }
  removeTemplate = i => {
    let banners = [...this.state.banners]
    console.log(banners)
    banners.splice(i, 1)
    this.setState({
      banners: banners
    })
  }
  storingData = () => {
    let params = {}
    if (this.state.experimentName !== null) {
      params['experimentName'] = this.state.experimentName
    }
    if (this.state.targetUser) {
      params['allTargetUsers'] = false
      params['grades'] = this.state.grades
      params['boards'] = this.state.boards
      params['academic_years'] = this.state.academic_years
      params['app_versions'] = this.state.app_versions
    } else {
      params['allTargetUsers'] = true
    }
    params['variations'] = []
    if (this.state.banners.length > 0) {
      let banner = {}
      banner['title'] = this.state.title
      banner['dimensions'] = this.state.dimensions
      banner['experiment'] = this.state.banners
      params.variations.push(banner)
    }
    console.log(params)
  }
  render () {
    return (
      <div>
        <div>
          <label>Experiment Name *</label>
          <input
            type='text'
            value={this.state.experimentName}
            name='experimentName'
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <label>Target Users </label>
          {TARGET_USERS.map((user, i) => {
            return (
              <Fragment>
                <input
                  type='radio'
                  id={user}
                  name='targetUser'
                  value={i}
                  checked={this.state.targetUser === i ? true : false}
                  onChange={this.changeHandler}
                />
                <label htmlFor={user}>{user}</label>
              </Fragment>
            )
          })}
        </div>
        {this.state.targetUser > 0 && this.template()}
        {this.variationCount()}
        {this.state.variationCount > 0 && this.userIdVariation()}
        {VARIATIONS.map((variation, i) => {
          if (variation <= this.state.variationCount) {
            return <Fragment>{this.template2()}</Fragment>
          }
        })}
        <div>
          <button onClick={this.storingData}>Save</button>
        </div>
      </div>
    )
  }
}
export default FirstPart
