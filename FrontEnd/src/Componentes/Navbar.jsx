import React from 'react'
import '../Estilos/App.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className='Navbar'>
                <div className='container-fluid'>
                    <header titutlo="" className="App-header">
                            <a className="header_registro" href="/">
                                {this.props.titulo}
                            </a>
                    </header>
                    <a className='Navbar_brand' href='/'>
                    </a>
                </div>
            </div>
        );
    }
}
export default Navbar;