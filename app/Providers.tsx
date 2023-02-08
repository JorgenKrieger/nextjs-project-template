'use client'

import ReactDOM from "react-dom";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState<boolean>(false)

	useEffect(() => {
		setMounted(true)

		if (process.env.NODE_ENV !== 'production') {
			const axe = require('@axe-core/react');
			axe(React, ReactDOM, 1000);
		}
	}, [])

	if (!mounted) {
		return null;
	}

	return (
		<ThemeProvider attribute="class">
			{children}
		</ThemeProvider>
	)
}