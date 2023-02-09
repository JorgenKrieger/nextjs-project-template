import ThemeSwitch from '@/components/ThemeSwitch'
import { ReactNode } from 'react'
import './globals.css'
import Providers from './Providers'

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			{/*
				<head /> will contain the components returned by the nearest parent
				head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
			*/}
			<head />
			<body>
				<Providers>
					<ThemeSwitch />
					{children}
				</Providers>
			</body>
		</html>
	);
}
