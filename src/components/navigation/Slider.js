import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        console.log(this.props.navData)
        let navData = this.props.navData;
        return (
            <div>
                <h1 className="country-header">Apple Retail Stores, United States</h1>
                <Navbar color="faded" light>
                    {/* <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand> */}
                    <Nav>
                        {navData && navData.cities.map(nav=>{
                        return (
                        <NavItem>
                            <NavLink alt={nav.section} href="#">{nav.label}</NavLink>
                        </NavItem>
                        )
                        })}
                      
                        </Nav>
                 </Navbar>
            </div>
        );
    }
}