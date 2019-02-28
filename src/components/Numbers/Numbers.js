import React, {Component} from 'react';
import './Numbers.css';


class Numbers extends Component {
    render() {
        return (
            <div className="lotto">

                {Object.values(this.props.combo.numbers).map((numb, i) => {
                    return <div className={"number"} key={i}>{numb} </div>;
                })}

            </div>
        );
    }
}


export default Numbers