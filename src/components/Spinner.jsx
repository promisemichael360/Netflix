import React from 'react'

const Spinner = () => {
    return (
            <div className="relative items-center flex m-3">
                <div class="w-8 h-8 rounded-full absolute border border-solid border-gray-200"></div>
                <div
                className="w-8 h-8 rounded-full animate-spin absolute border border-solid border-indigo-600 border-t-transparent"
                >
            </div>
            </div>
    )
}

export default Spinner
