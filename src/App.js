import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"
import axios from "axios"

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {
  constructor(props) {
    super(props)

    axios.get(baseUrl).then((res) => {
      this.setState( {users: res.data.data} )
    })


    this.state = {
      users: [
        // {
        //   id: 1,
        //   first_name: 'Jeanette',
        //   last_name: 'Penddreth',
        //   email: 'jpenddreth0@census.gov',
        //   gender: 'Female',
        //   ip_address: '26.58.193.2',
        // },
        // {
        //   id: 2,
        //   first_name: 'Giavani',
        //   last_name: 'Frediani',
        //   email: 'gfrediani1@senate.gov',
        //   gender: 'Male',
        //   ip_address: '229.179.4.212',
        // },
        // {
        //   id: 3,
        //   first_name: 'Noell',
        //   last_name: 'Bea',
        //   email: 'nbea2@imageshack.us',
        //   gender: 'Female',
        //   ip_address: '180.66.162.255',
        // },
        // {
        //   id: 4,
        //   first_name: 'Willard',
        //   last_name: 'Valek',
        //   email: 'wvalek3@vk.com',
        //   gender: 'Male',
        //   ip_address: '67.76.188.26',
        // },
      ],
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }
  render () {
    return (
      <div className='wrapper'>
        <Header title="Список пользователей" />
        <main>
          <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
        </main>
        <aside>
          <AddUser onAdd={this.addUser} />
        </aside>        
      </div>)
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  editUser(user) {
    let allUsers = this.state.users
    allUsers[user.id -1] = user
    this.setState( {users: []}, () => {
      this.setState({users: [...allUsers]})
    })
  }

  addUser(user) {
    console.log(user)
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users,  {id, ...user}] })
  }


}

export default App