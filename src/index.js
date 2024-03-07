import React from "react"
import * as ReactDOMClient from 'react-dom/client';
import App from './App'
import './css/main.css'

// ReactDOM.render(React.createElement('input', {
//     placeholder:'Help text',
//     onClick: () => console.log('clicked'),
//     onMouseEnter: () => console.log('MouseEnter')
// }), document.getElementById('app'));

// const inputClick = () => {
//   console.log('clicked')
// }
// const mouseOver = () => console.log('MouseEnter')

// const helpText = "Help text!"

// class Header extends React.Component  {
//   render () {
//     return (
//       <header>{this.props.title}</header>
//     )
//   }
// }

// class App extends React.Component {
//   helpText = "Help text!"
//   render () {
//     return (
//       <div className='wrapper'>
//         <Header title="Шапка сайта" />
//         <Header title="Шапка сайта!!!" />
//         <Header title="Шапка сайта!" />
//       <h1>Help text</h1>
//       <input placeholder={this.helpText} onClick={this.inputClick} onMouseEnter={this.mouseOver} />
//       <p>{this.helpText === "Help text!" ? "Yes" : "No"}</p>
//       </div>)
//   }

//   inputClick() {console.log('clicked')}
//   mouseOver() { console.log('MouseEnter')}

// }

// const elements = (<div className='wrapper'>
//   <h1>Help text</h1>
//   <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} />
//   <p>{helpText === "Help text!" ? "Yes" : "No"}</p>
//   </div>)

const app = ReactDOMClient.createRoot(document.getElementById("app"))
app.render(<App />)