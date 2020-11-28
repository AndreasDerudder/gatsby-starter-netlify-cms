import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'
import { signIn } from '../components/Login'
import { navigate, Router } from '@reach/router'

const isAuthenticated = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('isAuthenticated') === 'true';
    } else {
        return false;
    }
};

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      user: false,
    }

    this.logout = this.logout.bind(this);

    console.log(this.state);
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
        {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )

      console.log(this.state);
  }


    async componentDidMount() {
        const token = await signIn.authClient.tokenManager.get('idToken');
        if (token) {
            this.setState({user: token.claims.name});
            console.log(this.state)
        } else {
            // Token has expired
            this.setState({user: false});
            localStorage.setItem('isAuthenticated', 'false');
        }
    }

    logout() {
        signIn.authClient.signOut().catch((error) => {
            console.error('Sign out error: ' + error)
        }).then(() => {
            localStorage.setItem('isAuthenticated', 'false');
            this.setState({user: false});
            navigate('/');
        });
    }

  render() {
        let username;
      if (!isAuthenticated()) {
          username = <p><Link to='/account'>Login</Link></p>
      }else {
          username = <p>Welcome, {this.state.user}. <button onClick={this.logout}>Logout</button></p>
      }

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px', backgroundColor: 'black' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
                <Link className="navbar-item" to="/">
                    Home
                </Link>
                <Link className="navbar-item" to="/training">
                    Trainingen
                </Link>
              <Link className="navbar-item" to="/lidmaatschap">
                Lidmaatschap
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
                <a
                    className="navbar-item"
                    href="/admin/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Admin
                </a>
            </div>
            <div className="navbar-end has-text-centered">
              <div className="navbar-item">
                  {username}
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
