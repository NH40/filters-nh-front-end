import type { FC } from 'react'

import type { IGame } from '@/types/game.interface'
import SkeletonLoader from './CatalogLoader'
import { GameItem } from './GameItem'

interface ICatalog {
	games: IGame[]
	isLoading?: boolean
}

const Catalog: FC<ICatalog> = ({ games, isLoading }) => {
	if (isLoading) return <SkeletonLoader />

	return (
		<section>
			{games.length ? (
				<>
					<div className='grid grid-cols-3 gap-7'>
						{games.map(game => (
							<GameItem key={game.id} game={game} />
						))}
					</div>
				</>
			) : (
				<div>There are no games</div>
			)}
		</section>
	)
}

export default Catalog
