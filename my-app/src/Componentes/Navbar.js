import React from 'react'
import './styles/navbar.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className='Navbar'>
                <div className='container-fluid'>
                    <a className='Navbar_brand' href='/'>
                        {this.props.nabvar}
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;