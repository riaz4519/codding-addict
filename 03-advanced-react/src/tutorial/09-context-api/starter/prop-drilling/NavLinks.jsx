import UserContainer from './UserContainer'

const NavLinks = () => {
  return (
    <div>
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>

      
      <UserContainer  />
    </div>
  )
}

export default NavLinks
