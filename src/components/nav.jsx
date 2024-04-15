export default function nav() {
    return(
<header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-gray-800">
  <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
  <div className="flex items-center justify-between">
      <a className="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white" href="#">
        <img src="/images/logo.png" className='w-10 h-auto'alt="" />
        ServerDeploy
      </a>
    </div>    <div class="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
      <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/">Home</a>
      <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/partners">Partners</a>
      <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="https://wiki.serverdeploy.pro/">Wiki</a>
      <a className="font-medium text-blue-500" href="#" aria-current="page">Dashboard</a>
    </div>
  </nav>
</header>
    )
}