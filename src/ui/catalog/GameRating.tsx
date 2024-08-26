import { Star } from 'lucide-react'

export function GameRating({ rating }: { rating: number }) {
	return (
		<div className="text-base font-bold text-yellow-400 absolute top-1 right-1 z-[1] flex items-center gap-1 shadow">
			<Star size={18} /> <span>{rating}</span>
		</div>
	)
}
