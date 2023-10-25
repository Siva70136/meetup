import {useState} from 'react'
import RegisterContext from '../../context'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [topic, setTopic] = useState(topicsList[0].id)

  const register = e => {
    e.preventDefault()
    const {history} = props
    if (name === '') {
      setError('Please enter your Name')
    } else {
      setError('')
      console.log(name, topic)
      history.replace('/')
    }
  }

  const changeName = e => {
    setName(e.target.value)
  }

  return (
    <RegisterContext.Provider
      value={{
        name,
        topic,
      }}
    >
      <div className="main-container">
        <div className="app-container">
          <div className="header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
              className="logo"
            />
          </div>
          <div className="reg-container">
            <div className="">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png "
                alt="website register"
                className="reg"
              />
            </div>
            <div className="data-container">
              <h1>Let us join</h1>
              <form>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  onChange={changeName}
                  placeholder="Your Name"
                  className="input"
                  id="name"
                />
                <label htmlFor="topic">Topics</label>
                <select id="topic" onChange={e => setTopic(e.target.value)}>
                  {topicsList.map(each => (
                    <option key={each.id} value={each.id}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
                <button type="submit" className="button" onClick={register}>
                  Register Now
                </button>
                <p>{error}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </RegisterContext.Provider>
  )
}

export default Register
