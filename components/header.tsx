import Link from 'next/link';

export default function Header() {
  return (
    <header className='w-full'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 '>
        <div className='flex items-center justify-between h-16 md:h-20'>
          <Link
            href='/'
            className='shrink-0 text-3xl text-zinc-300 hover:text-white duration-500'
          >
            ✣
          </Link>

          <nav className='flex grow'>
            <ul className='flex flex-wrap items-center justify-end grow'>
              <li>
                <Link
                  href='/overview'
                  className='text-sm font-medium text-zinc-300 hover:text-white duration-500'
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
