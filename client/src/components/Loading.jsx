

const Loading = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
        <h2 className="mt-6 text-2xl font-semibold text-slate-800">
            Loading
        </h2>
        <p className="mt-2 text-slate-500">
            Please wait while we fetch the products.
        </p>
    </div>
  )
}

export default Loading