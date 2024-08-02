import React from 'react'

export default function Loader({message}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="text-lg font-semibold mb-4">{message}</div>
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
    )
}
