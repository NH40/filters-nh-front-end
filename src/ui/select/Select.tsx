import { useOutside } from '@/hooks/useOutside'
import cn from 'clsx'
import { ChevronDown } from 'lucide-react'
import { type ISelect } from './select.interface'

export function Select<K>({ data, onChange, value, title }: ISelect<K>) {
	const { isShow, ref, setIsShow } = useOutside(false)

	return (
		<div className='relative inline-block text-left w-full' ref={ref}>
			<button
				onClick={() => {
					setIsShow(!isShow)
				}}
				className='bg-slate-800 border border-slate-700 rounded-md shadow-sm px-4 py-2 font-medium text-slate-200 hover:bg-slate-700 text-left z-10'
			>
				{title && <b className='mr-2 text-slate-300'>{title}:</b>}
				{value?.label || 'Select'}
				<ChevronDown className='ml-2 h-4 w-4 inline-block text-slate-400' />
			</button>
			{isShow && (
				<ul
					className='absolute z-10 mt-1 w-full bg-slate-800 shadow-lg max-h-60 rounded-md py-1 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'
					role='listbox'
				>
					{data.map(item => (
						<li
							key={item.key?.toString()}
							className={cn(
								'text-slate-200 cursor-pointer select-none relative py-2 pl-3 pr-9',
								{ 'bg-violet-600 text-white': item.key === value?.key }
							)}
							onClick={() => {
								onChange(item)
								setIsShow(false)
							}}
						>
							<span
								className={cn('block truncate', {
									'font-semibold': item.key === value?.key
								})}
							>
								{item.label}
							</span>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
