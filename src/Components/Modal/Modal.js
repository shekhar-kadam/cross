import React from "react";

export default function Modal({ modalVal, onCancle, onConfirm }) {
  return (
    <>
      {modalVal ? (
        <>
          <div className="fixed inset-0 top-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none bg-red z-100 ">
            <div className="relative max-w-3xl mx-auto my-6 w-100 ">
              {/*content*/}
              <div className="relative flex justify-center w-full bg-black border-2 border-black rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}

                <button
                  onClick={() => {
                    onConfirm();
                    onCancle();
                  }}
                  className="p-5 text-white"
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    onCancle();
                  }}
                  className="p-5 text-white"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
