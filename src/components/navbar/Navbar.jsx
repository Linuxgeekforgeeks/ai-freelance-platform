import "./Navbar.css"

export const Navbar = () => {
  return (
    <header>
    <nav>
      <div className="logo">FreelanceAI</div>
      <div className="nav-links">
        <a href="#features">How it works</a>
        <a href="#">For Freelancers</a>
        <a href="#">For Clients</a>
        <button className="sign-up-btn">Sign Up</button>
      </div>
    </nav>
  </header>
  )
}
