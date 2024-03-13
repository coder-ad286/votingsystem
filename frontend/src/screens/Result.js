import React from 'react'

const Result = () => {
  return (
    <section className="bg-purple-100 rounded-2xl p-5 mb-10">
      <div className="container mx-auto">
        <div className="py-20">
          <h2 className="text-center text-5xl font-bold">Results</h2>
        </div>
      </div>
      <div className="flex justify-center text-center mx-auto p-5 mb-10">
        <table className="shadow-2xl  border-2 border-white w-full">
          <thead className="text-gray-600 font-bold text-lg">
            <tr>
              <th className="py-5 bg-red-300">Regisitratoin No</th>
              <th className="py-5 bg-red-300">Name</th>
              <th className="py-5 bg-red-300">Votes</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-center text-lg">
            <tr className="bg-red-200 hover:bg-red-100">
              <td className="p-5 px-10">2021ITC008</td>
              <td className="p-5 px-10">Ayyadurai</td>
              <td className="p-5 px-10">42</td>
            </tr>
            <tr className="bg-red-200 hover:bg-red-100">
              <td className="p-5 px-10">2021ITC017</td>
              <td className="p-5 px-10">Manikandan</td>
              <td className="p-5 px-10">42</td>
            </tr>
            <tr className="bg-red-200 hover:bg-red-100 ">
              <td className="p-5 px-10">2021ITC017</td>
              <td className="p-5 px-10">Gowtham</td>
              <td className="p-5 px-10">42</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Result