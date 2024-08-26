import { type FC } from 'react'

import { useFilters } from '../../useFilters'

import Checkbox from '@/ui/checkbox/Checkbox'
import FilterWrapper from '../FilterWrapper'
import { GENRE_VARIANTS } from './genres-variants.data'

const GenreGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	return (
		<FilterWrapper title="Genre">
			{GENRE_VARIANTS.map(genre => (
				<Checkbox
					isChecked={queryParams.genres?.includes(genre) || false}
					onClick={() => {
						const currentGenres = queryParams.genres
							? queryParams.genres.split('|')
							: []

						if (currentGenres.includes(genre)) {
							// Удаляем жанр из списка, если он уже выбран
							const newArray = currentGenres.filter(g => g !== genre)

							updateQueryParams('genres', newArray.join('|'))
						} else {
							// Добавляем жанр к списку
							updateQueryParams('genres', [...currentGenres, genre].join('|'))
						}
					}}
					key={genre}
					className="mb-2 text-lg"
				>
					<span className="flex items-center gap-1">{genre}</span>
				</Checkbox>
			))}
		</FilterWrapper>
	)
}

export default GenreGroup
