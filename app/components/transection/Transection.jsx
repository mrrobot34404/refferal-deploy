import React from "react"

const Transection = () => {
  return (
    <div className="mt-8 md:ml-[320px] top-0">
    <div className="container px-4 mx-auto">
        <div className="pt-4 bg-white shadow rounded">
          <div className="flex px-6 pb-4 border-b">
            <h3 className="text-xl font-bold">Recent Transactions</h3>
          </div>
          <div className="p-4 overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="text-xs text-gray-500 text-left"><th className="pb-3 font-medium">Transaction ID</th><th className="pb-3 font-medium">Date</th><th className="pb-3 font-medium">E-mail</th><th className="pb-3 font-medium">Subscription</th><th className="pb-3 font-medium">Status</th></tr>
              </thead>
              <tbody>
                <tr className="text-xs bg-gray-50">
                  <td className="py-5 px-6 font-medium">SR2451EW32</td>
                  <td className="font-medium">08.04.2021</td>
                  <td className="font-medium">name@shuffle.dev</td>
                  <td className="font-medium">Monthly</td>
                  <td>
                    <span className="inline-block py-1 px-2 text-white bg-green-500 rounded-full">Completed</span>
                  </td>
                </tr>
              </tbody>
            </table>
            
          </div>
        </div>
      </div>
</div>
  )
}

export default Transection