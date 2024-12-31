import React from 'react'

const Input = ({ type }) => {
    return (
        <input
            type={type}
            id="from"
            placeholder="From"
            className="w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        />
    )
}

export default Input