import React from 'react'

const Modal = ({ yes }) => {
    return (

        <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5">
            <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
                <h3 className="text-dark pb-2 text-xl font-bold sm:text-2xl">
                    Are you sure you wanna save?
                </h3>
                <span
                    className="bg-primary mx-auto mb-6 inline-block h-1 w-[90px] rounded"
                ></span>

                <div className="-mx-3 flex flex-wrap">
                    <div className="w-1/2 px-3">
                        <button
                            onClick={yes}
                            className="text-white block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:scale-[1.01] hover:border-red-600 bg-red-600 hover:text-white"
                        >
                            No, Cancel
                        </button>
                    </div>
                    <div className="w-1/2 px-3">
                        <button
                            onClick={yes}
                            className="bg-green-600 border-primary block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                        >
                            Yes, Save
                        </button>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default Modal