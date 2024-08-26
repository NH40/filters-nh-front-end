'use client'

import Image from 'next/image'

import { type IGame } from '@/types/game.interface'

import { convertPrice } from '@/utils/convert-price'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
const DynamicGameRating = dynamic(() =>
	import('./GameRating').then(mod => mod.GameRating)
)

export function GameItem({ game }: { game: IGame }) {
	if (!game) return null

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9, y: 20 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			transition={{ duration: 1, ease: 'easeOut' }}
		>
			<div>
				<div className="rounded-xl relative overflow-hidden">
					<DynamicGameRating rating={game.rating} />
					<Image
						width={151}
						height={224}
						src={game.image}
						alt={game.title}
						className="block mx-auto"
						priority
					/>
				</div>

				<h3 className="mt-2 font-semibold text-base leading-6">{game.title}</h3>

				<div className="text-xl font-semibold">{convertPrice(game.price)}</div>
			</div>
		</motion.div>
	)
}
