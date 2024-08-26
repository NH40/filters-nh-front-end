import Button from '@/ui/Button'
import { type FC } from 'react'

interface IPagination {
	numberPages: number
	changePage: (page: string) => void
	currentPage?: string
}

const Pagination: FC<IPagination> = ({
	numberPages,
	changePage,
	currentPage = 1
}) => {
	return (
		<div className="text-center mt-16">
			{Array.from({
				length: numberPages > 1 ? Math.ceil(numberPages) : 1
			}).map((_, index) => {
				const pageNumber = (index + 1).toString()

				return (
					<Button
						key={pageNumber}
						size="sm"
						variant={currentPage === pageNumber ? 'outline' : 'primary'}
						onClick={() => changePage(pageNumber)}
						className="mx-2.5"
						disabled={currentPage === pageNumber}
					>
						{pageNumber}
					</Button>
				)
			})}
		</div>
	)
}

export default Pagination
