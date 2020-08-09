import React, { Component } from 'react'

export default class TopSocial extends Component {



    render() {
        const {handleMouseLeave,handleMouseEnter,display} = this.props;

        return (
            <div>

                {/* // * Top Social Section */}
                <div className="top-container">

                    <div className="social-icons">
                        <div className="social-icon-container" id="facebook">
                            <div className={`tooltip tooltip-facebook ${display}`}>Facebook</div>
                            <span className="social-icon " onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} href="#">
                                <i className="fab fa-facebook"></i>
                            </span>
                        </div>
                        <div className="social-icon-container" id="twitter">

                            <div className={`tooltip tooltip-twitter ${display}`}>Twitter</div>
                            <span className="social-icon " onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} href="#">
                                <i className="fab fa-twitter"></i>
                            </span>
                        </div>
                        <div className="social-icon-container" id="github">
                        <div className={`tooltip tooltip-github  ${display}`}>Github</div>
                            <span className="social-icon " onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} href="#">
                                <i className="fab fa-github"></i>
                            </span>
                        </div>
                        <div className="social-icon-container" id="gmail">
                        <div className={`tooltip tooltip-gmail ${display}`}>Gmail</div>
                            <span className="social-icon " onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} href="#">
                                <i className="fab fa-google-plus-g"></i>
                            </span>
                        </div>
                        <div className="social-icon-container" id="linkedin">
                        <div className={`tooltip tooltip-linkedin ${display}`}>LinkedIn</div>
                            <span className="social-icon " onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} href="#">
                                <i className="fab fa-linkedin"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
