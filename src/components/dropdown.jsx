import classNames from 'classnames';
import React, { useEffect, useReducer, useRef, useState } from 'react';

function Dropdown() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.addEventListener('click', handleOutside, true);
	}, []);

	const refOne = useRef(null);

	const handleOutside = (e) =>
		!refOne.current.contains(e.target) ? setOpen(false) : '';

	return (
		<div className='menu-container' ref={refOne}>
			<div className='relative inline-block text-left'>
				<div>
					<button
						onClick={() => setOpen(!open)}
						type='button'
						className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-secondary px-4 py-2 text-sm font-bold text-primary shadow-sm hover:bg-gray-50 focus:outline-none'
						id='menu-button'
						aria-expanded='true'
						aria-haspopup='true'
					>
						Menu
						<svg
							className='-mr-1 ml-2 h-5 w-5'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							aria-hidden='true'
						>
							<path
								fillRule='evenodd'
								d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</div>
				<div
					className={classNames(
						open
							? 'duration-250 ease-in  absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-primary dark:bg-secondary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none '
							: 'hidden'
					)}
					role='menu'
					aria-orientation='vertical'
					aria-labelledby='menu-button'
					tabIndex='-1'
				>
					<div className='py-1' role='none'>
						<a
							href='/'
							onClick={() => setOpen(!open)}
							className='dark:text-primary hover:underline text-secondary block px-4 py-2 text-sm hover:text-secondary dark:hover:text-primary'
							role='menuitem'
							tabIndex='-1'
							id='menu-item-0'
						>
							Home
						</a>
					</div>

					<div className='py-1' role='none'>
						<a
							href='https://egors-homepage.vercel.app/'
							onClick={() => setOpen(!open)}
							className='dark:text-primary hover:underline text-secondary block px-4 py-2 text-sm hover:text-secondary dark:hover:text-primary'
							role='menuitem'
							tabIndex='-1'
							id='menu-item-0'
						>
							Website
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dropdown;
