import React from 'react'
import { NavType } from '../../types/nav'
import CustomLink from '../../ui/CustomLink'
const homeIcon = <svg className='w-6 h-6 text-white hover:text-gray-300 transition' fill='none' viewBox='0 0 20 20'><path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9'/></svg>

const Nav: React.FC = () => {
  const nav: NavType = [
    { name: homeIcon, to:'/' },
    { name: 'Add', to: '/add'}
  ]

  return (
    <>
      { 
        nav.length &&
        <nav>
          <ul className='mr-auto flex lg:flex-row'>
            { nav.map(({ name, to }, index) => (
              <li className='' key={ index }>
                <CustomLink to={ to } classes='header-link' activeClass='text-white'>
                  { name }
                </CustomLink>
              </li>
            ))}
          </ul>
        </nav>
      }
    </>
  )
}

export default Nav