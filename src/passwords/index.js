import {Component} from 'react'

import {v4} from 'uuid'

import PasswordsManager from '../passwordManager'

import './index.css'

const bgColors = ['1', '2', '3', '4', '5', '6']

class Passwords extends Component {
  state = {
    website: '',
    name: '',
    password: '',
    websiteDetails: [],
    checkbox: false,
    searchInputValue: '',
  }

  onWebsiteText = event => {
    event.preventDefault()
    this.setState({website: event.target.value})
  }

  onNameText = event => {
    event.preventDefault()
    this.setState({name: event.target.value})
  }

  onPasswordText = event => {
    event.preventDefault()
    this.setState({password: event.target.value})
  }

  addButton = event => {
    event.preventDefault()
    const {website, name, password} = this.state
    const randomColor = `color${
      bgColors[Math.ceil(Math.random() * bgColors.length - 1)]
    }`

    const newWebsite = {
      id: v4(),
      websiteName: website,
      personName: name,
      passwordText: password,
      bgRandomColor: randomColor,
    }
    this.setState(pre => ({
      websiteDetails: [...pre.websiteDetails, newWebsite],
      website: '',
      name: '',
      password: '',
    }))
  }

  checkBoxFn = () => {
    this.setState(pre => ({checkbox: !pre.checkbox}))
  }

  onSearchValue = event => {
    event.preventDefault()
    this.setState({searchInputValue: event.target.value})
  }

  deleteWebsiteDetails = id => {
    const {websiteDetails} = this.state
    const updatedWebsiteDetails = websiteDetails.filter(each => each.id !== id)
    this.setState({websiteDetails: updatedWebsiteDetails})
  }

  render() {
    const {
      website,
      name,
      password,
      websiteDetails,
      checkbox,
      searchInputValue,
    } = this.state

    const searchValues = websiteDetails.filter(each =>
      each.websiteName.toLowerCase().includes(searchInputValue.toLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="content-container">
          <div>
            <img
              className="app-logo"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
            />
          </div>
          <div className="passwords-container">
            <form className="password-box" onSubmit={this.addButton}>
              <h1 className="password-heading">Add New Password</h1>
              <div className="text-box">
                <img
                  className="mini-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  value={website}
                  onChange={this.onWebsiteText}
                />
              </div>
              <div className="text-box">
                <img
                  className="mini-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={name}
                  onChange={this.onNameText}
                />
              </div>
              <div className="text-box">
                <img
                  className="mini-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={this.onPasswordText}
                />
              </div>
              <div className="password-box-container">
                <button className="btn" type="submit">
                  Add
                </button>
              </div>
            </form>
            <div className="web-logo-container">
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
              />
            </div>
          </div>
          <div className="password-manager-container">
            <div className="search-box-container">
              <h1 className="password-heading span-spot">
                Your Passwords<p className="span">{searchValues.length}</p>
              </h1>
              <div className="search-box">
                <img
                  className="search-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                  alt="search"
                />
                <input
                  className="search-input"
                  type="search"
                  value={searchInputValue}
                  onChange={this.onSearchValue}
                  placeholder="Search"
                />
              </div>
            </div>
            <hr />
            <div className="check-box">
              <input
                id="checkbox"
                className="check-box-input"
                type="checkbox"
                onClick={this.checkBoxFn}
              />
              <label
                htmlFor="checkbox"
                className="password-heading check-heading"
              >
                Show passwords
              </label>
            </div>
            {searchValues.length > 0 ? (
              <ul className="websites-box">
                {searchValues.map(each => (
                  <PasswordsManager
                    key={each.id}
                    details={each}
                    checkBox={checkbox}
                    deleteWebsiteDetails={this.deleteWebsiteDetails}
                  />
                ))}
              </ul>
            ) : (
              <div className="no-websites-box">
                <img
                  className="empty-img"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                  alt="no passwords"
                />
                <p className="password-heading no-password">No Passwords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Passwords
