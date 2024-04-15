export default function Login() {
    return (
        <>

            <div className="font-sans text-center border-2 mt-56 w-96 rounded-md bg-sky-950">
                <h1 className="text-2xl text-gray-200 mt-1">ServerPay</h1>
                <hr />
                <p className="text-sky-300 mr-60 mt-2">Email</p>
                <input type="search" className="rounded-md indent-1 w-72" placeholder="ex@serverdeploy.pro"/>
                <p className="text-sky-300 mr-52 mt-1">Password</p>
                <input type="password" className="rounded-md indent-1 w-72" placeholder="password"/>
                <p className="text-white mt-2">OR</p>
                <div className="flex justify-center iems-center flex-row space-x-4">
                    <div className="border-2 w-28 flex flex-col items-center justify-center rounded-md mt-1">
                        <p className="mt-1 text-white">Continue with <i class="fa-brands fa-google"></i></p>
                    </div>
                    <div className="border-2 w-28 flex flex-col items-center justify-center  rounded-md mt-1">
                        <p className="mt-1 text-white">Continue with <i class="fa-brands fa-github"></i></p>
                    </div>
                </div>
                <hr className="mt-4" />
                <p className="text-gray-400 mt-1">Havent signed up yet? Sign up <a href="/signup" className="text-sky-600">Here!</a></p>
                <div className="mt-1"></div>
            </div>

        </>
    )
}
