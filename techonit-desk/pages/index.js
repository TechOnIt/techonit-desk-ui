import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className='mb-[8rem]'>
          <h1 className={styles.title}>
            Welcome to <a href="/">Desk!</a>
          </h1>
        </div>
        <div>
          <Link href='/auth/signin'>
            <a className='btn btn-primary'>Signin to account</a>
          </Link>
          <Link href='/manage'>
            <a className='btn btn-primary-outline ml-2'>Panel</a>
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/TechOnIt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className='flex'>
            <div className='flex flex-col justify-center'>
              Powered by{' '}
            </div>
            <div>
              <span className={styles.logo}>
                <Image src="/TechOnIt-Logo.svg" alt="TechOnIt Logo" width={40} height={40} />
              </span>
            </div>
          </div>
        </a>
      </footer>
    </div>
  )
}
