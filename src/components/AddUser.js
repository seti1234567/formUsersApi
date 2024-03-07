import React from 'react'

class AddUser extends React.Component {
  userAdd = {}
  constructor(props) {
    super(props)
    this.state = {
      id: 1,
      first_name: '',
      last_name: '',
      email: '',
      gender: '',
      ip_address: '10.0.0.1',
      isHappy: 'true',
    }
  }
  render() {
    return (
      <form ref={(el) => this.myForm = el}>
        <input
          placeholder="Имя"
          onChange={(e) => this.setState({ first_name: e.target.value })}
        />
        <input
          placeholder="Фамилия"
          onChange={(e) => this.setState({ last_name: e.target.value })}
        />
        <input
          placeholder="Почта"
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <input
          placeholder="Аватар"
          onChange={(e) => this.setState({ avatar: e.target.value })}
        />
        <input
          placeholder="IP адресс"
          onChange={(e) => this.setState({ ip_address: e.target.value })}
        />
        <label htmlFor="isHappy">Счастлив?</label>
        <input
          type="checkbox"
          id="isHappy"
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
        />
        <button type="button" onClick={() => { 
          this.myForm.reset()
          this.userAdd = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            avatar: this.state.avatar,
            ip_address: this.state.ip_address,
            isHappy: this.state.isHappy,
          }
          if(this.props.user)
            this.userAdd.id = this.props.user.id
          this.props.onAdd( this.userAdd )
        }}>Добавить</button>
      </form>
    )
  }
}

export default AddUser
