export default function Login() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
                <h1 className="mb-2 text-center text-3xl font-bold text-gray-900">
                    Welcome Back
                </h1>

                <p className="mb-6 text-center text-gray-500">
                    Login to your account
                </p>

                <form className="space-y-5">
                    <div>
                        <label
                            htmlFor="username"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>

                        <input
                            id="username"
                            type="text"
                            placeholder="username"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-gray-600">
                            <input type="checkbox" className="rounded" />
                            Remember me
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-orange-600 py-3 font-semibold text-white transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-700">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
}
