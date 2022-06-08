import React from "react";

export default function Modal({ modalVal, onCancle, onConfirm }) {
  return (
    <>
      {modalVal ? (
        <>
          <div className="fixed inset-0 top-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none z-100 focus:outline-none ">
            <div className="relative max-w-3xl mx-auto my-6 w-100 ">
              {/*content*/}
              <div className="relative flex flex-col w-full border-2 border-black rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}

                <button
                  onClick={() => {
                    onConfirm();
                    onCancle();
                  }}
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    onCancle();
                  }}
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
