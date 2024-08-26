'use client'

import { GameService } from '@/services/game.service'
import type { TypePaginationGames } from '@/types/game.interface'
import Catalog from '@/ui/catalog/Catalog'
import Heading from '@/ui/Heading'
import { useQuery } from '@tanstack/react-query'
import type { FC } from 'react'
import { Filters } from './filters/Filters'
import Pagination from './pagination/Pagination'
import SortDropdown from './sort/SortDropdown'
import { useFilters } from './useFilters'

interface IGameExplorer {
	initialGames: TypePaginationGames
}

export const GameExplorer: FC<IGameExplorer> = ({ initialGames }) => {
	const { queryParams, isFilterUpdated, updateQueryParams } = useFilters()

	const { data, isPending, isFetching, isLoading, isRefetching } = useQuery({
		queryKey: ['game explorer', queryParams],
		queryFn: () => GameService.getAll(queryParams),
		initialData: initialGames,
		enabled: isFilterUpdated
	})

	return (
		<div className="p-5">
			<div className="flex items-center justify-between mb-9">
				<Heading>Games</Heading>
				<SortDropdown />
			</div>

			<div className="grid grid-cols-[1.5fr_3fr] gap-6">
				<aside className="px-2">
					<Filters />
				</aside>

				<section>
					<Catalog
						games={data.games}
						isLoading={isPending || isFetching || isRefetching || isLoading}
					/>
					<Pagination
						changePage={page => updateQueryParams('page', page.toString())}
						currentPage={queryParams.page?.toString()}
						numberPages={data.length / +queryParams.perPage}
					/>
				</section>
			</div>
		</div>
	)
}
