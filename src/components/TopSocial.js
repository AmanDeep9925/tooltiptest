import React, { Component } from 'react'

export default class TopSocial extends Component {

    constructor() {
        super();
        this.state = {
            isHovered: false
        }
    }

    handleMouseEnter = () => {
        this.setState({
            isHovered: true
        })
    }

    handleMouseLeave = () => {
        this.setState({
            isHovered: false
        })
    }

    render() {

        const { position } = this.props;
        const { isHovered } = this.state;

        let posClass = '';

        switch (position) {
            case 'top': posClass = 'top'; break;
            case 'left': posClass = 'left'; break;
            case 'right': posClass = 'right'; break;
            case 'bottom': posClass = 'bottom'; break;
            default: posClass = '';
        }

        console.log(posClass)

        return (
            <div>

                {/* // * Top Social Section */}
                <div className="top-container">

                    <div className="social-icons" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <div className="social-icon-container" id="facebook">
                            {isHovered &&
                                (
                                    <div className={`${posClass}-tooltip tooltip-facebook `}>Facebook</div>

                                )
                            }
                            <span className="social-icon " href="#">
                                        <i className="fab fa-facebook"></i>
                            </span>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}
