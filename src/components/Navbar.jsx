import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className='sect'>
        <div className='wrapper'>
            <div className="logo">NCA</div>
            <div className="navItems">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#product">Product</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="userMgt">
                <div className="login">
                    Login
                </div>
                <button className="joinUs">Join Us</button>
            </div>
      </div>
    </div>
  )
}

export default Navbar
