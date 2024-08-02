import { useState } from "react";

type InfoCard = { children: React.ReactNode, companyName: string, period: string }

export default function InfoCard({ children, companyName, period }: InfoCard) {
  const [showMore, setShowMore] = useState(true);

  const handleToggle = () => setShowMore(prev => !prev);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 mb-4 md:mb-0">
        <p className="text-right px-5">{period}</p>
      </div>
      <div className="md:w-2/3 pb-10">
        <p className="font-bold">{companyName}</p>
        <p className={`${showMore ? "h-24 overflow-hidden overflow-ellipsis whitespace-normal" : ""}`}>
          {children}
        </p>

        <svg onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

      </div>
    </div>
  );

}