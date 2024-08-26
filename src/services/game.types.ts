import { EnumPlatform } from '@/types/game.interface'

export const GAMES = 'games'

export type TypeGameDataFilters = {
	sort?: EnumGameSort
	searchTerm?: string
	genres?: string
	platform?: EnumPlatform
	rating?: string
	minPrice?: string
	maxPrice?: string
	isAdultOnly?: 'true' | 'false'
	page?: string | number
	perPage: string | number
}

export enum EnumGameSort {
	LOW_PRICE = 'LOW_PRICE',
	HIGH_PRICE = 'HIGH_PRICE',
	OLDEST = 'OLDEST',
	NEWEST = 'NEWEST'
}

export type TypeParamsFilters = {
	searchParams: TypeGameDataFilters
}
