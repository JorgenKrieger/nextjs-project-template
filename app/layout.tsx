'use client'

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	if (process.env.NODE_ENV !== 'production') {
		useEffect(() => {
			const axe = require('@axe-core/react');
			axe(React, ReactDOM, 1000);
		},[])
	}

	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>{children}</body>
		</html>
	);
}
