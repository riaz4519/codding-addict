import { useState, useEffect } from 'react'
const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // console.log('Users')
    // get user data

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const usersData = await response.json()
        console.log(usersData)
        setUsers(usersData)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user

          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default FetchData
