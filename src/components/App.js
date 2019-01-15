import React, { Component } from 'react';
import Title from './Title';
import Card from './Card';
import Slider from './Slider';
import CardSplitter from './CardSplitter';
import WaterRecomandation from './WaterRecomandation';
import Run from './icons/Run';
import Heart from './icons/Heart';
import Sun from './icons/Sun';
// import Drop from './icons/Drop';
// import Drink from './icons/Drink';

class App extends Component {
  constructor() {
    super();
    this.state = {
      run: 0,
      meteo: 0,
      heart: 0,
    };
  }

  render() {
    const toPercent = v => 0.5 + (v / 100) * 0.5;
    const waterValue = toPercent(this.state.run) * toPercent(this.state.meteo) * toPercent(this.state.heart) * 5;

    return (
      <div className="container">
        <Card>
          <Title />
          <WaterRecomandation waterValue={waterValue} />
          <CardSplitter />
          <Slider icon={<Run color="#F44336" />}
            name="Distance"
            unit="m"
            value={this.state.run}
            onChange={v => {
              this.setState({
                run: v,
              });
            }} />
          <Slider icon={<Sun color="#FF9800" />}
            name="Météo"
            unit="°C"
            value={this.state.meteo}
            onChange={m => {
              this.setState({
                meteo: m,
              });
            }} />
          <Slider icon={<Heart color="#2196F3" />}
            name="Cardio"
            unit=" BPM"
            value={this.state.heart}
            onChange={c => {
              this.setState({
                heart: c,
              });
            }} />
        </Card>
      </div>
    );
  }
}

export default App;
