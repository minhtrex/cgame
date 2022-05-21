import React from 'react';
import './index.css';
import car_img from '../../assets/images/car.png'

export default class SheetCell extends React.Component {
    render() {
        let imgSrc;
        if (this.props.isOn) {
            imgSrc = <img src={car_img} height="45"/>;
        }

        let directionClass;
        switch (this.props.direction) {
            case 0:
                break;
            case 1:
                directionClass = "rotateimg90";
                break;
            case 2:
                directionClass = "rotateimg180";
                break;
            case 3:
                directionClass = "rotateimg270";
                break;
            default:
                break;
        }

        return (
            <div>
                <div className="square" id={this.props.id}>
                    <div className={directionClass}>
                        {imgSrc}
                    </div>
                </div>
            </div>
        );
    }
}