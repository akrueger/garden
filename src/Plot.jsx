// @flow weak

import React from 'react'
import Plant from './Plant.jsx'

const plants = Array(70).fill().map((el, i) => i + 1)

function random() {
	return (Math.random(0, 1) * 100).toFixed(0)
}

function object() {
	return ({
		water: random(),
		sun: random(),
		temperature: random(),
		soil: {
			nitrogen: random(),
			potassium: random(),
			phosphorus: random()
		}
	})
}

const Plot = ({store}) =>
	<div className='plot'>
		{plants.map((element, index) => {
			store.plants.push(object())
			return (
				<Plant key={index} store={store} id={index}/>
			)
		})}
	</div>

Plot.propTypes = {
	store: React.PropTypes.object
}

export default Plot
