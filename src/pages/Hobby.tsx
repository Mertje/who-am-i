import { useTitleChanger } from "../service/customHooks/useTitleChanger"

export default function HobbyProjects({ title }: { title: string }) {
  useTitleChanger(title)

  return (
    <>
      <div className="bg-red-300">
        <div className="grid justify-center">
          Work in progress
        </div>
      </div>
      <div className="grid grid-cols-4 justify-center py-9 animate-fadeIn flex-grow">
        <div className="col-span-4 sm:col-span-2 ml-0 w-full lg:w-3/4 sm:order-2">

        </div>
      </div>
    </>
  )
}