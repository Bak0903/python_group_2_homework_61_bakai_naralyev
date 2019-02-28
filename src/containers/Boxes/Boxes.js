import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Boxes.css';
import Fields from '../../components/Field/Field';
import ResetButton from '../../components/ResetButton/ResetButton';
import TriesCounter from '../../components/TriesCounter/TriesCounter';


class Boxes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boxes: this.generateBoxes(),
            clicks: 0,
        };
    };

    generateBoxes = () => {
      let boxes = [];
      let randomBox = Math.floor(Math.random() * 35);
      for (let i = 0; i < 36; i++) {
          i === randomBox ? boxes.push({
            boxId: i,
            boxClass: "clothed box",
            hasItem: true,
            boxIsDisabled: false
          }) : boxes.push({
            boxId: i,
            boxClass: "clothed box",
            hasItem: false,
            boxIsDisabled: false
          });}
      return boxes;
    };

    resetGame = () => {
        let boxes = this.generateBoxes();
        let clicks = 0;
        this.setState({ ...this.state,
            boxes,
            clicks
        });
    };

    openBox = (id) => {
        let boxes = this.state.boxes;
        let currentBox = boxes[id];
        let clicks = this.state.clicks;
        currentBox = this.checkBox(currentBox, boxes);
        boxes[id] = currentBox;
        clicks = clicks + 1;
        this.setState({ ...this.state,
            boxes,
            clicks
        });
    };

    checkBox = (checkingBox, currentField) => {
        if (checkingBox.hasItem) {
            checkingBox.boxClass = "NotEmpty box";
            this.disableAllBoxes(currentField);
        }
        else {
            checkingBox.boxClass = "open box";
            checkingBox.boxIsDisabled = true;
        }
        return checkingBox;
    };

    disableAllBoxes = (boxes) => {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].boxIsDisabled = true;
        }
        this.setState({ ...this.state,
            boxes
        });
    };

  render() {
    return (
      <div className="Platfrom">
        <Fields
          boxes = {this.state.boxes}
          onBox = {this.openBox}
        />
        <TriesCounter
            count = {this.state.clicks}
        />
        <ResetButton
            onReset = {this.resetGame}
        />
      </div>
    );
  }
}

export default Boxes;
