import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import ReactWrapBalancer from 'react-wrap-balancer';

export default function Hero() {
  return (
    <section className='min-h-screen '>
      <div className='w-full max-w-6xl mx-auto px-6 sm:px-6'>
        {/* Hero section */}
        <div className='pt-16 pb-16 md:pt-48'>
          <div className='container mx-auto text-center'>
            <h1
              className='font-extrabold pb-4 tracking-tight text-transparent text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-zinc-200/60  via-zinc-200 to-zinc-200/60'
              data-aos='fade-down'
            >
              <ReactWrapBalancer>
                Empower your career with Mentor Mate
              </ReactWrapBalancer>
            </h1>
            <p
              className='mb-8 text-lg text-zinc-300'
              data-aos='fade-down'
              data-aos-delay='400'
            >
              Connect with top mentors to accelerate your growth.
            </p>

            <div
              className='flex flex-col items-center max-w-sm mx-auto gap-4 sm:max-w-none sm:justify-center sm:flex-row sm:inline-flex'
              data-aos='fade-down'
              data-aos-delay='400'
            >
              <Link
                href='/overview'
                className='px-4 py-2 font-medium flex justify-center items-center whitespace-nowrap transition duration-150 ease-in-out w-full
                 text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 rounded hover:bg-white group'
              >
                Get Started
                <ArrowRightIcon className='w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
