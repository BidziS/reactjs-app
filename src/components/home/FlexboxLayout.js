import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const FlexboxLayout = () => {
    return (
        <div className="flex-container">
            <div className="col-md-6 col-lg-6 col-sm-10 col-xs-10">
                <Link to="/about">
                    <div className="item-homepage">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-xs-4">
                                <img src={'http://ecsmedia.pl/c/wiedzmin-tom-1-ostatnie-zyczenie-b-iext41816720.jpg'}
                                     alt="boohoo" className="img-homepage"/>
                            </div>
                            <div className="col-md-8 col-lg-8 col-xs-8 item-description">
                                <h4>Elo</h4>
                                <br/>
                                <h5>Autor: Andrzej Sapkowski</h5>
                                <br/>
                                <h5>Wydawnictwo: UWM</h5>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-10 col-xs-10">
                <Link to="/about">
                    <div className="item-homepage">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xs-3">
                                <img src={'http://ecsmedia.pl/c/wiedzmin-tom-1-ostatnie-zyczenie-b-iext41816720.jpg'}
                                     alt="boohoo" className="img-homepage"/>
                            </div>
                            <div className="col-md-9 col-lg-9 col-xs-9 item-description">
                                <h4>Elo</h4>
                                <br/>
                                <h5>Autor: Andrzej Sapkowski</h5>
                                <br/>
                                <h5>Wydawnictwo: UWM</h5>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-10 col-xs-10">
                <Link to="/about">
                    <div className="item-homepage">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-xs-4">
                                <img src={'http://ecsmedia.pl/c/wiedzmin-tom-1-ostatnie-zyczenie-b-iext41816720.jpg'}
                                     alt="boohoo" className="img-homepage"/>
                            </div>
                            <div className="col-md-8 col-lg-8 col-xs-8 item-description">
                                <h4>Elo</h4>
                                <br/>
                                <h5>Autor: Andrzej Sapkowski</h5>
                                <br/>
                                <h5>Wydawnictwo: UWM</h5>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-10 col-xs-10">
                <Link to="/about">
                    <div className="item-homepage">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-xs-4">
                                <img src={'http://ecsmedia.pl/c/wiedzmin-tom-1-ostatnie-zyczenie-b-iext41816720.jpg'}
                                     alt="boohoo" className="img-homepage"/>
                            </div>
                            <div className="col-md-8 col-lg-8 col-xs-8 item-description">
                                <h4>Elo</h4>
                                <br/>
                                <h5>Autor: Andrzej Sapkowski</h5>
                                <br/>
                                <h5>Wydawnictwo: UWM</h5>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default FlexboxLayout;
