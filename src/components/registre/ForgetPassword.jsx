import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../LayoutsLanding/Layout'

export default function ForgetPassword() {
  return (
    <Layout>
      <div className='flex items-center justify-center h-screen'>
        <div className='space-y-6'>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="mb-2">
              <h1 className="text-lg font-semibold text-gray-900">Reset your password</h1>
            </div>
            <p className="text-sm text-gray-600 mb-4">Enter your email and we'll send you a link to reset your password.</p>
            <form action="/password/email" className="w-full">
              <div className="mb-4">
                <label htmlFor="email-address" className="block text-sm font-semibold text-gray-900">Email address</label>
                <input type="email" id="email-address" className="mt-2 appearance-none text-gray-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder-gray-400 focus:ring-2 focus:ring-blue-500 ring-1 ring-gray-200" value="" required="" autoFocus="" />
              </div>
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                Reset your password
              </button>
            </form>
          </div>
          <div className="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
            <p className="text-center sm:text-left">Don't have an account?</p>
            <Link to="/inscription" className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20" href="/all-access">
              <span>Sign Up <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
