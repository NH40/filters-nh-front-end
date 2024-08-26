'use client'

import { useDebounce } from '@/hooks/useDebounce'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useFilters } from '../../useFilters'

export function SearchField() {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearchTerm = useDebounce(searchTerm, 500)

	const { updateQueryParams } = useFilters()

	useEffect(() => {
		updateQueryParams('searchTerm', debouncedSearchTerm)
	}, [debouncedSearchTerm])

	return (
		<div className="relative w-full max-w-sm mb-6">
			<Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-slate-500" />
			<input
				type="text"
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				placeholder="Search..."
				className="w-full pl-10 pr-4 py-2 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent bg-slate-800"
			/>
		</div>
	)
}
