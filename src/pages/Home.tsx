import LinkButton from "../components/button";
import { getCurrentAge } from "../service/utils/date"
import { useTitleChanger } from "../service/customHooks/useTitleChanger"
import { HOBBY_TITLE, HOBBY_URL, PROJECT_TITLE, PROJECT_URL, SKILLS_TITLE, SKILLS_URL } from "../constant/pageInfo";

export default function Home({ title }: { title: string }) {
  const age = getCurrentAge();
  useTitleChanger(title)

  return (
    <div className="grid grid-cols-4 justify-center py-9 animate-fadeIn flex-grow sm:w-9/12 sm:mx-auto">
      <div className="pb-5 col-span-4 md:col-span-2 ml-0 w-full lg:w-3/4 md:order-2">
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
          <LinkButton link={SKILLS_URL}>{SKILLS_TITLE}</LinkButton>
          <LinkButton link={PROJECT_URL}>{PROJECT_TITLE}</LinkButton>
          <LinkButton link={HOBBY_URL}>{HOBBY_TITLE}</LinkButton>
        </div>
      </div>
      <div className="col-span-4 row-span-3 sm:col-span-2 sm:order-1">
        <img
          className="border-gray-400 border-2 aspect-square rounded-full object-cover w-3/4 h-auto m-auto md:h-80 md:w-80 md:mr-0 md:ml-auto"
          src="./mert_gunes.jpg"
          alt="Mert Gunes"
        />
      </div>
    </div>
  )
};
