import type { FC, PropsWithChildren } from 'react'

interface IFilterWrapper {
	title: string
}

const FilterWrapper: FC<PropsWithChildren<IFilterWrapper>> = ({
	title,
	children
}) => {
	return (
		<div className="mb-6">
			<div className="mb-3 font-semibold text-lg">{title}</div>
			<div>{children}</div>
		</div>
	)
}

export default FilterWrapper
