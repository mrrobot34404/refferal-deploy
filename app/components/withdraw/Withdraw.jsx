const Withdraw = () => {
    return (
      <section className="bg-coolGray-50 py-4">
    <div className="container px-4 mx-auto">
      <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
        <div className="pb-6 border-b border-coolGray-100">
          <div className="flex flex-wrap items-center justify-between -m-2">
            <div className="w-full md:w-auto p-2">
              <h2 className="text-coolGray-900 text-lg font-semibold">3000 INR</h2>
              <p className="text-xs text-coolGray-500 font-medium">Available</p>
            </div>
            <div className="w-full md:w-auto p-2">
              <div className="flex flex-wrap justify-between -m-1.5">
                <div className="w-full md:w-auto p-1.5">
                  <button className="flex flex-wrap justify-center w-full px-4 py-2 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button">
                    <p>Request</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 border-b border-coolGray-100">
          <div className="w-full md:w-9/12">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <p className="text-sm text-coolGray-800 font-semibold">Amount</p>
              </div>
              <div className="w-full md:w-1/3 p-3">
                <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input" type="text" placeholder="500" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
    )
  }
  
  export default Withdraw;