import { SKILLS_TITLE } from "../constant/pageInfo"
import { useTitleChanger } from "../service/customHooks/useTitleChanger"
import InfoCard from "../components/infoCard";

export default function DetailedInformation({ title }: { title: string }) {
  useTitleChanger(title);

  return (
    <div className="py-9 px-9 animate-fadeIn sm:w-9/12 sm:mx-auto">
      <p className="font-bold text-6xl pt-3">{SKILLS_TITLE}</p>
      <div className="grid grid-cols-3 pt-14">
        <div className="">
          <p className="text-2xl font-bold">Werkervaring</p>
        </div>
        <div className="col-span-2">
          <InfoCard companyName="xxllnc" period="2023 - Heden">
            In MensCentraal heb ik functionaliteiten zoals single sign-on (SSO) geïmplementeerd.
            Ik ontwikkelde de frontend in JSP en JSF met PrimeFaces. Ik ontwikkelde en onderhield API endpoints met WSDL-contracten.
            Daarnaast verholp ik problemen met de database in productieomgevingen.
          </InfoCard>
          <InfoCard companyName="Garden connect" period="2022 - 2023">
            Nog te vullen
          </InfoCard>

        </div>
      </div>
    </div>
  )
}