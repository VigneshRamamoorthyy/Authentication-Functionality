import './index.css'

import LogoutButton from '../LogoutButton'

import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <h1 className="home-text">Home Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home
