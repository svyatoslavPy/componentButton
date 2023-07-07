import { Button } from './Button'
import { dataBtns } from '../../data'
import { useState } from 'react'
import { Input } from '../Inputs/Input'

export const Buttons = () => {
	const [btnValue, setBtnValue] = useState('')
	const [showValue, setShowValue] = useState(false)

	const setBtnValueHandler = value => {
		setBtnValue(value)
	}
	const showValueHandler = () => {
		if (btnValue) {
			setShowValue(true)
		} else {
			setShowValue(false)
		}
	}

	return (
		<div className='buttons'>
			<Input setBtnValueHandler={setBtnValueHandler} />
			{dataBtns.map((item, index) => (
				<Button
					key={index}
					showValueHandler={showValueHandler}
					text={item.text}
				></Button>
			))}
			<p>{showValue ? btnValue : 'Введите значение'}</p>
		</div>
	)
}
