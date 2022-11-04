import "../../Assets/Styles/MyNavbar.css";

function MyNavbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom ">
        <div className="container-fluid ">
          <a className="navbar-brand text-light" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="/">
                  {props.NewsCatagory1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  {props.NewsCatagory2}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  {props.NewsCatagory3}
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  {props.NewsCatagory4}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  {props.NewsCatagory5}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  {props.NewsCatagory6}
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light search" type="submit">
                Search
              </button>
            </form>
            <button className="btn btn-outline-light SignIn" type="submit">
              SignIn
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MyNavbar;
