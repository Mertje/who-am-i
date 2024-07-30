import LinkButton from "../components/button";
import { getCurrentAge } from "../service/utils/date"
import { useTitleChanger } from "../service/customHooks/useTitleChanger"
import { CV_URL, PROJECT_URL } from "../constant/urls";

export default function Home({title}: {title: string}) {
  const age = getCurrentAge();
  useTitleChanger(title)

  return (
    <div className="grid grid-cols-4 justify-center py-9 animate-fadeIn flex-grow">
      <div className="col-span-4 sm:col-span-2 ml-0 w-full lg:w-3/4 sm:order-2">
        <div className="px-9 py-2">
          <p className="font-bold text-6xl pt-3">Hallo</p>
          <p className="font-semibold text-3xl pt-4">Over Mij</p>
          <p className="text-l pt-2">
            Mijn naam is Mert Gunes, sinds 2018 werk ik in de it als software ontwikkelaar.
            Ik ben {age} jaar oud, en studeer deeltijd HBO software engineer op het HVA.
            Mijn passie ligt bij het ontwikkellen van full stack applicaties.
          </p>
        </div>
        <div className="grid grid-cols-3 px-9">
          <LinkButton link={PROJECT_URL}>Projecten</LinkButton>
          <LinkButton link={CV_URL}>CV</LinkButton>
          <LinkButton link="/hobby">Hobby</LinkButton>
        </div>
      </div>
      <div className="col-span-4 row-span-3 sm:col-span-2 sm:order-1">
        <img
          className="border-gray-400 border-2 aspect-square rounded-full object-cover w-3/4 h-auto m-auto sm:h-80 sm:w-80 sm:mr-0 sm:ml-auto"
          src="./mert_gunes.jpg"
          alt="Mert Gunes"
        />
      </div>
    </div>
  )
};

function changeTitle() {
  throw new Error("Function not implemented.");
}
