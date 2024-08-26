import { GameService } from '@/services/game.service'
import type {
	TypeGameDataFilters,
	TypeParamsFilters
} from '@/services/game.types'
import { GameExplorer } from './home/GameExplorer'

export const revalidate = 60

async function getGames(searchParams: TypeGameDataFilters) {
	const data = await GameService.getAll({
		...searchParams,
		perPage: searchParams.perPage || 9
	})
	return data
}

export default async function HomePage({ searchParams }: TypeParamsFilters) {
	const data = await getGames(searchParams)

	return <GameExplorer initialGames={data} />
}
