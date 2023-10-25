const NotFound = () => {
  console.log('hi')

  return (
    <div className="main-container">
      <div className="app-container">
        <div className="content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
            alt="not found"
            className="meetup"
          />
          <h1 className="head">Page Not Found</h1>
          <p className="desc">
            We are sorry, the page you requested could not be found
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
