import { type FC } from 'react'

import Range from '@/ui/range/Range'

import { useFilters } from '../../useFilters'
import FilterWrapper from '../FilterWrapper'

const PriceGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	return (
		<FilterWrapper title="Price from/to">
			<Range
				max={100}
				fromInitialValue={
					queryParams.minPrice ? Number(queryParams.minPrice) : undefined
				}
				toInitialValue={
					queryParams.maxPrice ? Number(queryParams.maxPrice) : undefined
				}
				onChangeFromValue={value =>
					updateQueryParams('minPrice', value.toString())
				}
				onChangeToValue={value =>
					updateQueryParams('maxPrice', value.toString())
				}
			/>
		</FilterWrapper>
	)
}

export default PriceGroup
