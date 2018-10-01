import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Tooltip from 'rc-tooltip';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Handle = Slider.Handle;
const wrapperStyle = { width: 400, margin: 50 };

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};


class Tracker extends Component {
	constructor(props){
		super(props);

		this.state={
			value: '5',
		}
	}

	componentDidMount(){
		console.log("should show tracker screen")
	}

	componentWillUnmount() {
		console.log("No more tracker screen")
	}



	render(){
		return(
			<div>
				<h2> Record your day </h2>
				<fieldset>
					<legend> Recovery </legend>
					<p> How many hours did you sleep last night </p>
					<input type="number"></input>
					<p> Did you hit your nutrition goals yesterday?</p>
					<RadioGroup onChange={ this.onChange } horizontal>
						<RadioButton value="Yes">Yes</RadioButton>
						<RadioButton value="No">No</RadioButton>
					</RadioGroup>
					<p> Are you cutting weight?</p>
					<RadioGroup onChange={ this.onChange } horizontal>
						<RadioButton value="Yes">Yes</RadioButton>
						<RadioButton value="No">No</RadioButton>
					</RadioGroup>
				</fieldset>
				<h3> For the following questions, rate them on a 0-10 scale with 10 being high and 1 being low.</h3>
				<fieldset>
					<legend> Physical </legend>
					<p>Soreness (10 is very sore, 0 is not at all</p>
     				<Slider min={0} max={10} defaultValue={5} handle={handle} />
     				<p>Tiredness</p>
      				<Slider min={0} max={10} defaultValue={5} handle={handle} />
				</fieldset>
				<fieldset>
					<legend>Mental</legend>
					<p>Rate your overall mood before training. 10 is "I feel great" 0 is "I feel terrible"</p>
     				<Slider min={0} max={10} defaultValue={5} handle={handle} />
     				<p>How well did you think you performed?</p>
      				<Slider min={0} max={10} defaultValue={5} handle={handle} />
      				<p>Rate your overall mood after training. 10 is "I feel great" 0 is "I feel terrible"</p>
      				<Slider min={0} max={10} defaultValue={5} handle={handle} />
				</fieldset>
				<fieldset>
					<legend> Notes </legend>
					<input type="textarea"></input>
				</fieldset>
			</div>
		)
	}
}

export default Tracker;