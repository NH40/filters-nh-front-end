import { type FC } from 'react'

import { useFilters } from '../../useFilters'
import FilterWrapper from '../FilterWrapper'

import Checkbox from '@/ui/checkbox/Checkbox'
import { Star } from 'lucide-react'
import { RATING_VARIANTS } from './ratings-variants.data'

const RatingGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	return (
		<FilterWrapper title="Rating">
			{RATING_VARIANTS.map(rating => (
				<Checkbox
					isChecked={queryParams.rating === rating.toString()}
					onClick={() => updateQueryParams('rating', rating.toString())}
					key={rating}
					className="mb-2 text-lg"
				>
					<span className="flex items-center gap-1">
						<Star size={16} />
						{'>= '}
						{rating}
					</span>
				</Checkbox>
			))}
		</FilterWrapper>
	)
}

export default RatingGroup
