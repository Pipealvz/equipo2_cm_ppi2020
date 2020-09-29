import React from 'react'
import '../Estilos/App.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className='Navbar'>
                <div className='container-fluid'>
                    <header className="App-header">
                                        <a className="header_registro" href="/">
                                                Registro
                                        </a>    {this.props.nabvar}
                    </header>
                    <a className='Navbar_brand' href='/'>
                    </a>
                </div>
            </div>
        );
    }
}
export default Navbar;