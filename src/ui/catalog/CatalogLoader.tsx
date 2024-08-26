import { type FC } from 'react'

const SkeletonLoader: FC = () => {
	return (
		<div className='grid grid-cols-3 gap-7'>
			{Array.from({ length: 9 }).map((_, index) => (
				<div
					key={index}
					className='animate-pulse bg-slate-700 rounded-lg h-56 w-full'
				>
					<div className='h-full w-full bg-slate-600 rounded-lg'></div>
				</div>
			))}
		</div>
	)
}

export default SkeletonLoader
