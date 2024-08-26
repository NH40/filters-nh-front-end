'use client'
import useFiltersStore from '@/store/store'
import Button from '@/ui/Button'

import { RefreshCcw } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

export function ResetButton() {
	const { reset } = useFiltersStore()
	const router = useRouter()
	const pathname = usePathname()

	const resetHandler = () => {
		reset()
		router.replace(pathname)
	}

	return (
		<Button
			variant="outline"
			onClick={resetHandler}
		>
			<RefreshCcw />
		</Button>
	)
}
