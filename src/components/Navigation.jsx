const Navigation = () =>{
    return(
        <nav className="container">
        <div className="logo">
          <img src="/images/nike-logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#"> Menu </li>
          <li href="#"> Location </li>
          <li href="#"> About </li>
          <li href="#"> Contact </li>
        </ul>
        <button className="first-btn"> Login </button>
       </nav>
    );
};

export default Navigation;