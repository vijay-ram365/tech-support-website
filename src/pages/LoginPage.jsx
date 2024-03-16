export default function LoginPage() {
  return (
    <div className="border">
      <p className="text-center text-slate-400">Login to view tickets</p>
      <form className="max-w-sm mx-auto">
        <div>
          <label htmlFor="loginEmail" className="text-cyan-700">
            Email
          </label>
          <input
            type="text"
            id="loginEmail"
            className="
            bg-gray-200 w-full appearance-none border-2 border-gray-200 rounded py-1 px-2 mb-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-700"
            required
            autoComplete="true"
          />
        </div>
        <div>
          <label htmlFor="loginPassword" className="text-cyan-700">
            Password
          </label>
          <input
            type="text"
            id="loginPassword"
            className="
            bg-gray-200 w-full appearance-none border-2 border-gray-200 rounded py-1 px-2 mb-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-700"
            required
            autoComplete="true"
          />
        </div>
      </form>
    </div>
  );
}
