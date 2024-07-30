import { useTitleChanger } from "../service/customHooks/useTitleChanger"

export default function ProjectsWorkedOn({ title }: { title: string }) {
  useTitleChanger(title)

  return (
    <div className="bg-red-300">
      <div className="grid justify-center">
        Work in progress
      </div>
    </div>
  )
}