import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Dashboard from "material-ui/svg-icons/action/dashboard";
import AccountCircle from '@material-ui/icons/AccountCircle';
import HamburgerMenu from 'react-hamburger-menu'
import { slide as Menu } from 'react-burger-menu'
import MenuProfile from "@material-ui/core/Menu";
import IconButton from '@material-ui/core/IconButton';


class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            slideMenuActive: false,
            openHamburger: false,
            auth: true,
            anchorEl: null
        }
    }

    componentDidMount() {
        this.handleOutsideClick = this.handleOutsideClick.bind(this)

    }

    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleOutsideClick() {
        this.setState({
            openHamburger: false,
            menuOpen: false
        });
        document.removeEventListener('click', this.handleOutsideClick, false)
    }

    handleClick() {
        this.setState({
            openHamburger: !this.state.openHamburger,
            menuOpen: !this.state.menuOpen
        });

        if (this.state.openHamburger == false) {
            document.addEventListener('click', this.handleOutsideClick, false)
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false)
        }
    }

    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    closeMenu() {
        this.setState({
            menuOpen: false,
            openHamburger: false
        })
    }

    render() {
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div >
                <div className="headercontent" >
                    <div className="header-inner">
                        <div className="heading-logo">
                            <div className="logo-text">
                                <h1 className="site-title">
                                    <span className="main-heading">Finding Steve</span>
                                </h1>
                                <h2 className="sub-site-title">
                                    <span className="subheading-main">
                                        Welcome to the site that gives you the best movie recommendation based on what your friends have seen!
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <div className={!this.state.openHamburger ? "menu-button" : "menu-button-active"} >
                            <HamburgerMenu
                                isOpen={this.state.openHamburger}
                                menuClicked={() => {
                                    this.handleClick()
                                }}
                                width={18}
                                height={15}
                                strokeWidth={1}
                                rotate={0}
                                color='black'
                                borderRadius={0}
                                animationDuration={0.5}
                            />
                        </div>
                        <div className="profile-button">
                            <div>
                                <IconButton
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <MenuProfile
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={() => {
                                        localStorage.clear();
                                        // this.props.userLogout();
                                    }} containerElement={<Link to="/login" />}>
                                        Logout
                                </MenuItem>
                                </MenuProfile>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-layout" >
                    <Menu
                        right
                        width={"500px"}
                        customBurgerIcon={false}
                        onStateChange={(state) => this.handleStateChange(state)}
                        isOpen={this.state.menuOpen}
                    >
                        <MenuItem
                            className="menuitem"
                            // containerElement={<Link to="/" />}
                            value="Dashboard"
                            onClick={() => this.closeMenu()}
                            component={Link} to="/"
                        />
                    </Menu>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogout: () => dispatch(userLogout())
    };
};

export default withRouter(connect(undefined, mapDispatchToProps)(SideBar));
