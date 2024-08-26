import cn from 'clsx'
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary' | 'outline'
	size?: 'sm' | 'md' | 'lg'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	size = 'md',
	disabled,
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				'font-semibold rounded transition-colors duration-200 text-white',
				{
					'bg-primary  hover:bg-violet-500': variant === 'primary',
					'bg-secondary  hover:bg-blue-400': variant === 'secondary',
					'border border-primary text-primary hover:bg-primary':
						variant === 'outline',
					'px-3 py-1 text-sm': size === 'sm',
					'px-5 py-2 text-md': size === 'md',
					'px-7 py-3 text-lg': size === 'lg',
					'opacity-50 cursor-not-allowed': disabled
				},
				className
			)}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button
