import type { EnumPlatform } from '@/types/game.interface'

import { Select } from '@/ui/select/Select'
import { type FC } from 'react'
import { useFilters } from '../../useFilters'
import FilterWrapper from '../FilterWrapper'
import { PLATFORM_VARIANTS } from './platform-variants.data'

const PlatformSelect: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	// Преобразуем PLATFORM_VARIANTS в нужный формат для Select
	const platformOptions = PLATFORM_VARIANTS.map(platform => ({
		key: platform,
		label: platform
	}))

	const handleChange = (selectedPlatform: { key: string; label: string }) => {
		updateQueryParams('platform', selectedPlatform.key)
	}

	return (
		<FilterWrapper title="Platform">
			<Select<EnumPlatform>
				data={platformOptions}
				onChange={handleChange}
				value={platformOptions.find(
					option => option.key === queryParams.platform
				)}
				title="Platform"
			/>
		</FilterWrapper>
	)
}

export default PlatformSelect
