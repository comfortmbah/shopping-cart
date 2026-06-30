

const Error = ({ message }) => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="max-w-md rounded-xl bg-red-100 p-8 text-center shadow-lg">
        <h2 className="mb-3 text-2xl font-bold text-red-600">
          Oops!
        </h2>

        <p className="text-gray-700">
          {message}
        </p>
      </div>
    </div>
  )
}

export default Error