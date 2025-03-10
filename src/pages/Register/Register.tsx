import { Link } from "react-router-dom"

export const Register = () => {
  return (
    <div className='bg-orange-600'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm'>
              <div className='text-2xl'>Đăng Ký</div>
              <div className='mt-3'>
                <input
                  type='email'
                  name='email'
                  className='w-full rounded-b-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Email'
                />
                <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>Email không hợp lệ</div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  className='w-full rounded-b-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Password'
                />
                <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'></div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='confirm-password'
                  className='w-full rounded-b-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Confirm Password'
                />
                <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'></div>
              </div>
              <button className='mt-3 w-full rounded bg-red-500 px-2 py-4 text-center text-sm text-white uppercase hover:bg-red-600'>
                Đăng ký
              </button>
              <div className="mt-8">
                <div className="text-center">
                  <div className="flex justify-center">
                    <span className="text-gray-400">Bạn đã có tài khoản chưa ?</span>
                    <Link className="text-red-400 ml-1" to={'/login'}>Đăng nhập</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
