import React, { useEffect, useState } from 'react'
import { listPolls } from '../../api/voteAPI';

const AdminPanel = () => {
  const [component, setComponent] = useState(0)
  const [poll, setPoll] = useState(null);
  const [error,setError] = useState(null)

  useEffect(() => {
    async function api() {
        try{
          const result = await listPolls()
          setPoll(result.data.data)
        }
        catch(err){
          setError(err.response.data.message)
        }
    } api()
  },[])
  return (
    <>

      {/* DIAPLAY POLLS */}
      {component === 0 && (<section className="bg-purple-100 rounded-2xl p-5 mb-10">
        <div className="py-28">
          <h2 className="text-center text-5xl font-bold">
            Admin Panel
          </h2>
          <h4 className="text-left text-5xl font-italic ml-8 mt-8">
            Polls:-
          </h4>
        </div>
        {poll && <div className=" w-1/2 text-center mx-auto mb-5 bg-white py-3 rounded-2xl shadow-lg">
          <label className="text-center text-2xl font-bold" htmlFor="polls">{poll.name}</label>
          <button className="bg-purple-600 text-lg text-white p-3 rounded-2xl hover:bg-purple-900 mt-2 ml-5"
            type="submit">Delete</button>
        </div>}
        {!poll && <div className=" w-1/2 text-center mx-auto mb-5 bg-white py-3 rounded-2xl shadow-lg">
          <label className="text-center text-2xl font-bold" htmlFor="polls">No Poll Found...!</label>
        </div>}
        <button className="bg-purple-600 text-lg text-white p-3 rounded-2xl hover:bg-purple-900 mt-5 justify-center">
          Create
        </button>
      </section >)}

      {/* CREATE POLL */}
      {component === 1 && (<section className="bg-purple-100 rounded-2xl p-5 mb-10">
        <div className="container mx-auto">
          <div className="py-28">
            <h2 className="text-center text-5xl font-bold">
              Create Poll
            </h2>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-wrap mt-2 mb-2">
              <div className="w-1/2 p-5">
                <div className="bg-white p-10 rounded-2xl shadow-lg">
                  <label className="text-center text-2xl font-italic text-gray-700" htmlFor="poll">
                    Poll Name :
                  </label>

                  <input className="border border-black p-3 rounded-2xl font-bold text-lg shadow ml-5" type="text"
                    id="number" placeholder="Enter poll name" />

                  <div className="mt-10">
                    <label className="text-center text-2xl font-italic text-gray-700" htmlFor="poll">
                      Nominee :
                    </label>
                    <input className="border border-black p-3 rounded-2xl font-bold text-lg shadow ml-7"
                      type="text" id="number" placeholder="Enter nominee Regno" />
                    <button
                      className="bg-purple-600 text-lg text-white p-3 rounded-2xl hover:bg-purple-900 mt-5"
                      type="submit">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-1/2 p-5">
                <div className="bg-white p-5 rounded-2xl shadow-lg">
                  <div>
                    <label className="text-center text-2xl font-italic text-gray-700" htmlFor="nominee">
                      Nominees:-
                    </label>
                    <div className='bg-purple-400 p-3 mt-3'>
                      <div>
                        <p className='bg-white p-2 text-black font-bold m-1'>2021ITC005</p>
                        <p className='bg-white p-2 text-black font-bold m-1'>2021ITC005</p>
                        <p className='bg-white p-2 text-black font-bold m-1'>2021ITC005</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' w-full flex justify-center'>
                <button type='submit' className='bg-purple-600 text-white px-2 py-0.5 rounded'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>)}
    </>
  )
}

export default AdminPanel