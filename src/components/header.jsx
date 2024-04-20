export function Header () {
  return (
    <header className='flex items-center justify-start h-16 border-b'>
      <img
        src='/images/logoteameval2.png'
        alt='Logo Teameval'
        className='h-8 ml-4'
      />
      <h1 className='ml-2 text-2xl font-bold'>
        TEAM<span className='text-primary'>EVAL</span>
      </h1>
    </header>
  )
}
