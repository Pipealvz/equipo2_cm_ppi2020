import React from 'react'
import '../Estilos/App.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className='Navbar'>
                <div className='container-fluid'> {this.props.transform}
                    <header titulo="" className="header_registro">
                        {this.props.titulo}
                    </header>
                </div>
            </div>
        )
    }
}
export default Navbar;