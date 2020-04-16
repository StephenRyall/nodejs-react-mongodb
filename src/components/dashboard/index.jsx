import React, { Component } from 'react';
import Loader from 'react-loaders'
import { connect } from 'react-redux';
import { getMovieByTitle } from './../../actions/dashboard';
import { ControlledInput } from './../../shared-components/controlledInput';
import { useStyles } from './../../styles/MuiStyles';
import { FlatButton } from './../../shared-components/flatButton';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieSingle: {},
            searchInput: ""
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps = ({ movieData }) => {
        if (movieData != undefined) {
            console.log("jj", movieData.title)
            this.setState({
                movieSingle: movieData
            })
        }
    }

    setMovieSearch = (e) => {
        this.setState({
            searchInput: e.target.value
        })
    }

    directSend = (e) => {
        if (e.keyCode == 13) {
            this.sendSearch();
        }
    }

    sendSearch() {
        const { searchInput } = this.state;
        this.props.setSingleMovie(searchInput);
    }


    render() {
        const { movieSingle, searchInput } = this.state
        const { movieLoader } = this.props;
        return (
            <div >
                <div style={{ height: "110px" }}></div>
                <div className="whole-dashboard">
                    <div className="selected-movie">
                        {movieLoader == true ?
                            <div className="loader-wrapper">
                                <Loader type="ball-scale-multiple" />
                            </div>
                            :
                            <p>The selected movie is: {movieSingle.title}</p>
                        }
                    </div>
                    <div className="input-movie">
                        <ControlledInput
                            label={'Search Movies'}
                            auto={'off'}
                            currItem={searchInput}
                            searchFunc={(e) => this.setMovieSearch(e)}
                            width={300}
                            maxWidth={'74%'}
                            directEnter={(e) => this.directSend(e)}
                            bot={10}
                        />
                        <FlatButton
                            execClick={() => this.sendSearch()}
                            butClassName={useStyles.button}
                            loading={movieLoader}
                            pulseClass={'sweet-loading-sign-up'}
                            pulseColor={'black'}
                            text={'SEARCH'}
                            isDisabled={!movieLoader}
                            setClass={'login-button'}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ dashboard }) => {
    return {
        movieData: dashboard.movieData,
        movieLoader: dashboard.movieLoader
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSingleMovie: (title) => dispatch(getMovieByTitle(title))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

