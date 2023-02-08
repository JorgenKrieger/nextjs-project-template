'use client'

import { ThemeProvider } from 'next-themes'
// import ThemeSwitch from '@/components/ThemeSwitch'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		if (process.env.NODE_ENV !== 'production') {
			const axe = require('@axe-core/react');
			axe(React, ReactDOM, 1000);
		}
	}, [])

	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<ThemeProvider attribute='class'>
					{/* <ThemeSwitch /> */}
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
