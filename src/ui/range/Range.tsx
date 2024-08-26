'use client'

import { useDebounce } from '@/hooks/useDebounce'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { type FC, useEffect, useState } from 'react'

interface IRange {
	min?: number
	max: number
	fromInitialValue?: number
	toInitialValue?: number
	onChangeFromValue: (value: number) => void
	onChangeToValue: (value: number) => void
}

const Range: FC<IRange> = ({
	min = 0,
	max,
	onChangeFromValue,
	onChangeToValue,
	fromInitialValue = 0,
	toInitialValue = max
}) => {
	const [fromValue, setFromValue] = useState(fromInitialValue)
	const [toValue, setToValue] = useState(toInitialValue)

	useEffect(() => {
		setFromValue(fromInitialValue)
		setToValue(toInitialValue)
	}, [fromInitialValue, toInitialValue])

	const debouncedFromValue = useDebounce(fromValue, 500)
	const debouncedToValue = useDebounce(toValue, 500)

	// Обновляем значения с дебаунсом
	useEffect(() => {
		onChangeFromValue(debouncedFromValue)
	}, [debouncedFromValue])

	useEffect(() => {
		onChangeToValue(debouncedToValue)
	}, [debouncedToValue])

	return (
		<div className="w-full px-1">
			<Slider
				range
				min={min}
				max={max}
				value={[fromValue, toValue]}
				onChange={value => {
					if (typeof value === 'object') {
						setFromValue(value[0])
						setToValue(value[1])
					}
				}}
			/>
			<div className="flex justify-between text-base text-slate-400 mt-2">
				<span>От: ${fromInitialValue}</span>
				<span>До: ${toInitialValue}</span>
			</div>
		</div>
	)
}

export default Range
