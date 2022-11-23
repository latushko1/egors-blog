import classNames from 'classnames';
import React, { useState } from 'react';

function Dropdown() {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<div class='relative inline-block text-left'>
				<div>
					<button
						onClick={() => setOpen(!open)}
						type='button'
						class='inline-flex w-full justify-center rounded-md border border-gray-300 bg-secondary px-4 py-2 text-sm font-bold text-primary shadow-sm hover:bg-gray-50 focus:outline-none'
						id='menu-button'
						aria-expanded='true'
						aria-haspopup='true'
					>
						Menu
						<svg
							class='-mr-1 ml-2 h-5 w-5'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							aria-hidden='true'
						>
							<path
								fill-rule='evenodd'
								d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
								clip-rule='evenodd'
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
					tabindex='-1'
				>
					<div class='py-1' role='none'>
						<a
							href='/'
							onClick={() => setOpen(!open)}
							class='dark:text-primary text-secondary block px-4 py-2 text-sm hover:text-secondary dark:hover:text-primary'
							role='menuitem'
							tabindex='-1'
							id='menu-item-0'
						>
							Home
						</a>
					</div>

					<div class='py-1' role='none'>
						<a
							href='https://egors-homepage.vercel.app/'
							onClick={() => setOpen(!open)}
							class='dark:text-primary text-secondary block px-4 py-2 text-sm hover:text-secondary dark:hover:text-primary'
							role='menuitem'
							tabindex='-1'
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
