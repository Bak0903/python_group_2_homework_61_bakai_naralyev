import React, { Component } from 'react';
import './Lotto.css';
import Numbers from "../../components/Numbers/Numbers.js";

function compareNumeric(a, b) {
  return a - b;
}

function lottoCombination() {
    let combo = [5, 6, 7, 8, 9];
    for (let i = 0; i < 5; i++) {
        for (let j = 4; j >= 0; j--){
            if (combo[j] === combo[i])

                combo[i] = Math.floor(Math.random() * 28) + 5;
        }
    }
    combo.sort(compareNumeric);
    return combo;
}


class Lotto extends Component {

    state = {numbers: lottoCombination()};

    newCombo = () => {
        console.log('Кнопка нажата');
        let newState = {...this.state};
        newState.numbers = lottoCombination();
        this.setState(newState)
    };

  render() {
    return (
      <div className="Platfrom">
          <button className={'btn'} onClick={() =>(this.newCombo())}>New numbers</button>
          <Numbers combo = {this.state}/>
      </div>
    );
  }
}

export default Lotto;
