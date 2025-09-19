import React from "react";
import { AnimatedModalDemo } from "./animated-modal-demo";

export function ServicesTexts() {
  return (
    <div className="flex justify-center items-center w-[400px] lg:w-[600px] px-3 lg:px-0 mb-5 lg:mb-0">
      <div className="w-full lg:max-w-3xl ">
        <div className="inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl lg:py-20">
          <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="relative z-50 lg:mb-4 text-xl font-bold text-white">
            Nos services pour estimer la valeur de votre maison
          </h1>

          <p className="relative z-50 lg:mb-4 text-base font-normal text-slate-300">
            Visualisez l&apos;évolution des prix immobiliers et 
            comprenez comment votre bien se positionne par rapport au marché.
          </p>

        <br />

           <p className="relative z-50 mb-4 text-base font-normal text-slate-300">
            Recevez un rapport clair et détaillé, 
            prêt à être partagé avec des acheteurs ou des agents immobiliers.
          </p>

          <br />

           <p className="relative z-50 mb-4 text-base font-normal text-slate-300">
            Remplissez le formulaire ci-dessous, et vous aurez votre rapport instantannément

          </p>
         
         <br />

          {/* <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
            Explore
          </button> */}
          <AnimatedModalDemo/>

        </div>
      </div>
    </div>
  );
}
