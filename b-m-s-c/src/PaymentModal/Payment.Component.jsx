import React from 'react';
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
// no local state needed here; remove unused import

const PaymentModel = ({setIsOpen,isOpen,price}) => {
    const closeModal = () => {
        setIsOpen(false) 
    }

const launchRazorPay = () => {
    let options = {
      key: "rzp_test_I7T5qR7uWvVsLX",
      amount : price *100,
      currency: "INR",
      name:"Book My Show Clone",
      description: "Movie Purchase or rental",
      image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
      handler:()=>{
        setIsOpen(false);
        alert("Payment Successful");
      },
      theme:{color: "#c4242d"},
    };
    let razorPay=window.Razorpay(options);
    razorPay.open(); 
}
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={closeModal}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Please make a payment
              </DialogTitle>
              <p className="text-sm text-gray-500">
                Hello please click on the below button to make a payment.
              </p>
              <div className="mt-4 flex inline-flex gap-3">
                <Button
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
                  onClick={launchRazorPay}
                >
                  Pay {price}
                </Button>
                <Button
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
                  onClick={closeModal}
                >
                  Cancel Payment
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default PaymentModel;