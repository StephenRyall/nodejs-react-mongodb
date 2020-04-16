import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import SideBar from "./sideBar";

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: true,
            loading: false,
            learner: ""
        }
    }

    // componentWillReceiveProps = ({ }) => {

    // };

    // componentDidMount() {
    //     fetch(`/users/me`, {
    //         method: "GET",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json"
    //             // Authorization: "Bearer ".concat(token)
    //         }
    //     })
    //         .then(res => {
    //             if (res.ok) {
    //                 res.json().then(() => {
    //                     this.setState({
    //                         isAuth: true,
    //                         loading: false
    //                     });
    //                 });
    //             } else {
    //                 this.setState({
    //                     isAuth: false,
    //                     loading: false
    //                 });
    //             }
    //         })
    //         .catch(e => {
    //             throw e;
    //         });
    // };


    render() {
        const {
            component: Component,
            ...rest
        } = this.props;
        const {
            loading,
            isAuth
        } = this.state;



        if (loading) {
            return <div />;
        } else if (isAuth) {
            return (
                <Route
                    {...rest}
                    render={props =>
                        <div className="page-layout">
                            <SideBar />
                            <div className="main-page">
                                <Component {...props} />
                            </div>
                        </div>
                    }
                />
            );
        } else {
            return (
                <Route
                    {...rest}
                    render={props =>
                        <Redirect to="/login" />
                    }
                />
            );
        }
    }
}

const mapStateToProps = ({ auth }) => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
