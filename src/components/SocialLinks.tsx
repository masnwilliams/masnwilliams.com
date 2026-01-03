import Link from 'next/link'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  XIcon,
} from '@/components/Icons'

const socialLinks = [
  {
    name: 'GitHub',
    link: 'https://www.github.com/masnwilliams',
    icon: <GitHubIcon size={20} />,
  },
  {
    name: 'X.com',
    link: 'https://x.com/@masonwilliams',
    icon: <XIcon size={20} />,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/john-mason-williams/',
    icon: <LinkedInIcon size={20} />,
  },
]

const SocialLinks = () => {
  return (
    <div className='flex items-center space-x-1 sm:space-x-2'>
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.link}
          target='_blank'
          rel='noopener noreferrer'
          className='p-1.5 sm:p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200'
          aria-label={social.name}>
          {social.icon}
        </Link>
      ))}
    </div>
  )
}

export default SocialLinks
