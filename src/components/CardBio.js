// dependencies
import React from 'react'

// https://www.youtube.com/watch?v=rH9jM-8hAD8

// includes
import './CardBio.css'

class CardBio extends React.Component {
    constructor(props) {
        super(props)
        this.state = { show: false }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            show: !prevState.show
        }))
    }

    render() {
        let bioPicClass = 'bioPic'
        let bioWrapperClass = 'bioWrapper'
        if (this.state.show) {
            bioPicClass = 'bioPic bpHidden'
            bioWrapperClass = 'bioWrapper bwShown'
        } else {
            bioPicClass = 'bioPic bpShown'
            bioWrapperClass = 'bioWrapper bwHidden'
        }

        return (
            <div className='myCard'>
                <div 
                    className={bioPicClass}
                    style={{
                        backgroundImage: `url(${this.props.photo})`
                    }}
                    onClick={this.handleClick}
                >    
                </div>
                <div
                    className={bioWrapperClass}
                    onClick={this.handleClick}
                >
                    <p className='bioText'>{this.props.text}</p>

                </div>
            </div>
        )
    }

    /*
    render() {
        return (
            <div className='myCard'>
                <div className={this.state.show ? 'imgContainerHidden' : 'imgContainer'}>
                    <img 
                        className='imgStyle'
                        onClick={this.handleClick}
                        src={this.props.photo} 
                        alt={this.props.name}
                    />
                </div>
                <div className='cardBody'>
                    <h4>{this.props.name}</h4>
                    <h4>{this.props.position}</h4>
                </div>
            </div>
        )
    }
    */
}

export default CardBio