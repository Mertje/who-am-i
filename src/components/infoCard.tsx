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
        <p className={`${showMore ? "h-24 overflow-hidden overflow-ellipsis whitespace-normal" : "pb-3"}`}>
          {children}
        </p>

        {showMore ? (
          <svg onClick={handleToggle} className="size-6" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        ) : (
          <svg onClick={handleToggle} className="size-6" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        )}
      </div>
    </div>
  );

}