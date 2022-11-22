import React from 'react';
import Logo from './logo.svg';
import { useEffect, useState } from 'react';
import Dropdown from './dropdown';

function Header() {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	const handlerThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<div className='fixed w-full z-50'>
			<div className='flex justify-between items-center py-2 backdrop-blur-md'>
				<div className='flex gap-2 items-center'>
					<img alt='logo' src={Logo} />
					<h4 className='text-base font-bold text-white'>Egor Latushko</h4>
				</div>

				<div className='mr-4 flex gap-2 items-center'>
					<button
						type='button'
						onClick={handlerThemeSwitch}
						className='border-2 border-primary dark:border-secondary rounded-xl py-[5px] px-[15px] text-lg transition-all ease-in-out'
					>
						{theme === 'dark' ? '🌙' : '🔆'}
					</button>

					<Dropdown />
				</div>
			</div>
		</div>
	);
}

export default Header;
