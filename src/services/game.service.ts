import { axiosClassic } from '@/api/api'
import { type TypePaginationGames } from '@/types/game.interface'
import { GAMES, type TypeGameDataFilters } from './game.types'

export const GameService = {
	async getAll(queryData = {} as TypeGameDataFilters) {
		const { data } = await axiosClassic<TypePaginationGames>({
			url: GAMES,
			method: 'GET',
			params: queryData
		})

		return data
	}
}
