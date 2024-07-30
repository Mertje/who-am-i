import { PROJECT_TITLE } from "../constant/pageInfo"
import { useTitleChanger } from "../service/customHooks/useTitleChanger"

export default function ProjectsWorkedOn({ title }: { title: string }) {
  useTitleChanger(title)

  return (
    <div className="py-9 px-9 animate-fadeIn sm:w-9/12 sm:mx-auto">
      <p className="font-bold text-6xl pt-3">{PROJECT_TITLE}</p>
      <div className="grid grid-cols-2 pt-14">
        <div className=""><p className="text-2xlnp">Werkervaring</p></div>
        <div className=""></div>
      </div>
    </div>

  )
}