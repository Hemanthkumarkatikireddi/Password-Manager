import './index.css'

const PasswordsManager = props => {
  const {details, checkBox, deleteWebsiteDetails} = props
  const {websiteName, personName, passwordText, bgRandomColor, id} = details

  const deleteWebsite = () => {
    deleteWebsiteDetails(id)
  }
  const icon = websiteName[0].toUpperCase()

  return (
    <li className="websites-list">
      <div className={bgRandomColor} id="personId">
        {icon}
      </div>
      <div className="website-details">
        <p>{websiteName}</p>
        <p>{personName}</p>
        <p>
          {checkBox ? (
            passwordText
          ) : (
            <img
              className="hide"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </p>
      </div>

      <button className="delete-btn" type="button">
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          onClick={deleteWebsite}
        />
      </button>
    </li>
  )
}
export default PasswordsManager
