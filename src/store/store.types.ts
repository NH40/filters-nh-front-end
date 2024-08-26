import type { TypeGameDataFilters } from '@/services/game.types'

export interface IStore {
	queryParams: TypeGameDataFilters
	isFilterUpdated: boolean
	updateQueryParam: (data: {
		key: keyof TypeGameDataFilters
		value: string
	}) => void
	reset: () => void
}
