import { useFilters } from '../../useFilters'
import FilterWrapper from '../FilterWrapper'

export function Switcher() {
	const { queryParams, updateQueryParams } = useFilters()

	const isAdultOnly = queryParams.isAdultOnly === 'true'

	return (
		<FilterWrapper title="Adult only">
			<button
				onClick={() => updateQueryParams('isAdultOnly', !isAdultOnly + '')}
				className={`relative inline-flex items-center h-7 rounded-full w-14 focus:outline-none ${
					isAdultOnly ? 'bg-violet-500' : 'bg-slate-600'
				}`}
			>
				<span
					className={`${
						isAdultOnly ? 'translate-x-7' : 'translate-x-1'
					} inline-block w-5 h-5 transform bg-white rounded-full transition-transform`}
				/>
			</button>
		</FilterWrapper>
	)
}
