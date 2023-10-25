import {Link} from 'react-router-dom'
import RegisterContext from '../../context'
import './index.css'

const Home = () => {
  console.log('hi')

  return (
    <RegisterContext.Consumer>
      {value => {
        const {name, topic} = value

        console.log(name, topic)

        return (
          <div className="main-container">
            <div className="app-container">
              <div className="header-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                  className="logo"
                />
              </div>
              <div className="content-container">
                <h1 className="head">Welcome to Meetup</h1>
                <p className="desc">Please register for the topic</p>
                <p>{name}</p>
                <Link to="/register">
                  <button type="button" className="button">
                    Register
                  </button>
                </Link>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png "
                  alt="meetup"
                  className="meetup"
                />
              </div>
            </div>
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
