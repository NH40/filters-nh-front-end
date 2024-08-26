import cn from 'clsx'
import type { FC, PropsWithChildren } from 'react'

interface IHeading {
	className?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ className, children }) => {
	return <h1 className={cn('font-semibold text-4xl', className)}>{children}</h1>
}

export default Heading
