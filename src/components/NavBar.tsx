'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import SocialLinks from '@/components/SocialLinks'

const navItems = [
  {
    href: '/',
    text: 'Home',
    newTab: false,
  },
  {
    href: '/newsletter',
    text: 'Newsletter',
    newTab: true,
  },
  {
    href: '/podcast',
    text: 'Podcast',
    newTab: true,
  },
]

const NavBar = () => {
  const pathname = usePathname()

  const linkClasses = (href: string) => {
    return pathname === href
      ? 'text-gray-900 bg-gray-100 px-3 py-2 sm:px-4 rounded-xl font-medium text-sm sm:text-base'
      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 sm:px-4 rounded-xl transition-all duration-200 font-medium text-sm sm:text-base'
  }

  return (
    <nav className="mx-4 sm:mx-20 md:mx-32 mt-4 sm:mt-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Profile Image */}
          <Link
            href={'/'}
            className={'hover:scale-105 transition-all duration-200 group'}>
            <div className="relative">
              <Image
                src={'/mason.jpg'}
                alt={'Mason Williams'}
                width={40}
                height={40}
                className={'w-8 h-8 sm:w-12 sm:h-12 rounded-full ring-2 ring-gray-100 group-hover:ring-gray-200 transition-all duration-200'}
              />
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden sm:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className={linkClasses(item.href)}
                target={item.newTab ? '_blank' : ''}
                rel={item.newTab ? 'noopener noreferrer' : ''}>
                {item.text}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center">
            <SocialLinks />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden mt-3 pt-3 border-t border-gray-100">
          <div className="flex justify-center space-x-1">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className={linkClasses(item.href)}
                target={item.newTab ? '_blank' : ''}
                rel={item.newTab ? 'noopener noreferrer' : ''}>
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
