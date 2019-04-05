import React from 'react'
import DrawerToggleButton from "./DrawerToggleButton"

import '../../index.css'

const Navbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
    <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Navbar


// https://stackoverflow.com/questions/38518278/how-to-use-jquery-on-reactjs

// import React, { Component } from "react";

// class Navbar extends React.Component {
    // state = {
    //   isOpen: false
    // };
    
    // toggleCollapse = () => {
    //   this.setState({ isOpen: !this.state.isOpen });
    // }

//     constructor() {
//       super();
//       this._handleClick = this._handleClick.bind(this);
//     }
  
//     componentDidMount() {
//       this._handleClick();
//     }
  
//     _handleClick() {
//       const acc = this._acc.children;
//       for (let i = 0; i < acc.length; i++) {
//         let a = acc[i];
//         a.onclick = () => a.classList.toggle("active");
//       }
//     }
    
//     render() {
//       return (
//         <div 
//         ref={a => this._acc = a} 
//         onClick={this._handleClick}>
//         {this.props.children}
//       </div>

//  )}}
{/* <nav className="navbar navbar-dark  indigo darken-2">

  <a className="navbar-brand" href="#">Navbar</a>

  <button className="navbar-toggler third-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent22"
    aria-controls="navbarSupportedContent22" aria-expanded="false" aria-label="Toggle navigation">
    <div className="animated-icon3"><span></span><span></span><span></span></div>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent22">

    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
    </ul>

  </div>

</nav> */}
     ;

      // export default Navbar

        //   <div className="navbar-fixed">
        // <nav className="z-depth-3">
        //   <div className="nav-wrapper">
        //   <a href="#" data-target="mobile-demo" className="sidenav-trigger">
        //       <i className="material-icons">menu</i>
        //     </a>
        //     <ul className="right hide-on-med-and-down">
        //     <li><a href="#">Link 1</a></li>
        //     <li><a href="#">Link 2</a></li>
        //     <li><a href="#">Link 3</a></li>
        //     </ul>
        //   </div>
        // </nav>

        // <ul className="sidenav" id="mobile-demo">
        //   <li><a href="#">Link 1</a></li>
        //   <li><a href="#">Link 2</a></li>
        //   <li><a href="#">Link 3</a></li>
        // </ul>
        // </div>

//       <MDBNavbar color="indigo" dark expand="md">
//         <MDBNavbarBrand>
//           <strong className="white-text">Navbar</strong>
//         </MDBNavbarBrand>
//         <MDBNavbarToggler onClick={this.toggleCollapse} />
//         <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
//           <MDBNavbarNav left>
//             <MDBNavItem active>
//               <MDBNavLink to="#!">Home</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="#!">Features</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="#!">Pricing</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle nav caret>
//                   <span className="mr-2">Dropdown</span>
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu>
//                   <MDBDropdownItem href="#!">Action</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavItem>
//           </MDBNavbarNav>
//           <MDBNavbarNav right>
//             <MDBNavItem>
//               <MDBFormInline waves>
//                 <div className="md-form my-0">
//                   <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
//                 </div>
//               </MDBFormInline>
//             </MDBNavItem>
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBNavbar>
//     );
//   }
// }

// export default Navbar;



// import React, { Component } from "react";
// import { Link, NavLink } from "react-router-dom";

// class Navbar extends Component {
//   state = {
//     isOpen: false
//   };
  
//   toggleCollapse = () => {
//     this.setState({ isOpen: !this.state.isOpen });
//   }
  
//   render() {
//     return (
//      <div className="navbar-fixed">
//         <nav className="z-depth-3">
//           <div className="nav-wrapper">
//           <a href="#" data-target="mobile-demo" className="sidenav-trigger">
//               <i className="material-icons">menu</i>
//             </a>
//             <ul className="right hide-on-med-and-down">
//             <li><a href="#">Link 1</a></li>
//             <li><a href="#">Link 2</a></li>
//             <li><a href="#">Link 3</a></li>
//             </ul>
//           </div>
//         </nav>

//         <ul className="sidenav" id="mobile-demo">
//           <li><a href="#">Link 1</a></li>
//           <li><a href="#">Link 2</a></li>
//           <li><a href="#">Link 3</a></li>
//         </ul>
//         </div>
// )}
// }
      
            {/* <Link
              to="/"
              style={{
                fontFamily: "Simplifica",
                fontweight: "bold"
              }}
              className="col s5 brand-logo right-align white-text"
            >
              <i className="material-icons"></i>
              SFA Group Benefits
            </Link>

            
      <li key="B">
      <NavLink to="/benefits">Benefits</NavLink>
      </li>
      <li key="C">
        <NavLink to="/notes">Notes</NavLink>
      </li>
      <li key="D">
        <NavLink to="/files">Files</NavLink>
      </li>
    </ul> */}

{/* //     <div className="sidenav">
//     <i className="material-icons" onClick={this.burgerToggle}>menu</i>
//     <a href="#" onClick={this.burgerToggle}>Link 1</a>
// 						<a href="#" onClick={this.burgerToggle}>Link 2</a>
// 						<a href="#" onClick={this.burgerToggle}>Link 3</a>
//     </div>

// <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></a>
//           <ul className="right hide-on-med-and-down">

//     <ul className="sidenav" id="mobile-demo">

//     <li><NavLink to="/" onClick={this.burgerToggle}>Landing</NavLink></li>
//     <li><NavLink to="/benefits" onClick={this.burgerToggle}>Benefits</NavLink></li>
//     <li><NavLink to="/notes" onClick={this.burgerToggle}>Notes</NavLink></li>
//     <li><NavLink to="/files" onClick={this.burgerToggle}>Files</NavLink></li>
    
//   </ul>
//               </div>
//         </nav>
//       </div>
      
//     );
//   }

  // burgerToggle: function() {
	// 	let linksEl = document.querySelector('.sidenav');
	// 	if (linksEl.style.display === 'block') {
	// 		linksEl.style.display = 'none';
	// 	} else {
	// 		linksEl.style.display = 'block';
	// 	}
	// }

// } */}
// export default Navbar