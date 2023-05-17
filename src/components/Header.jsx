import gela from "./../images/a.png"

const Header=()=>{
    return (
    <header>
        <div className="wrapper">
        <figure className="logo">
          <a href="./index.html">
            <img className="logo" src={gela}/>
          </a>
        </figure>
        <div className="navbut">
          <nav>
            <ul>
              <li><a href="./index.html"> home </a> </li>
              <li><a href="./index.html"> demo </a></li>
              <li><a href="./index.html"> inner-page</a></li>
              <li><a href="./index.html"> support</a></li>
              <li><a href="./index.html"> feature</a></li>
              <li><a href="./index.html"> blog</a> </li>
            </ul>
            <button>get started</button>
          </nav>
        </div>
      </div>
      </header>)
}

export default Header