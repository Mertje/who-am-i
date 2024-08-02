import { SKILLS_TITLE } from "../constant/pageInfo"
import { useTitleChanger } from "../service/customHooks/useTitleChanger"
import InfoCard from "../components/infoCard";

export default function DetailedInformation({ title }: { title: string }) {
  useTitleChanger(title);

  return (
    <div className="py-9 px-9 animate-fadeIn sm:w-9/12 sm:mx-auto">
      <p className="font-bold text-6xl pt-3">{SKILLS_TITLE}</p>
      <div className="grid grid-cols-3 pt-14">
        <div>
          <p className="text-2xl font-bold">Werkervaring</p>
        </div>
        <div className="col-span-2">
          <InfoCard companyName="xxllnc" period="2023 - Heden">
            Bij mijn werkzaamheden ben ik verantwoordelijk voor het onderhouden van MensCentraal.
            Dit omvat het ontwikkelen en implementeren van nieuwe functionaliteiten zoals single sign-on (SSO).
            Daarnaast ontwikkel ik de frontend in JSP en JSF met behulp van PrimeFaces en zorg ik voor het
            ontwikkelen en onderhouden van API-endpoints met behulp van WSDL-contracten.
            Een ander belangrijk aspect van mijn werk is het updaten van verouderde Maven-pakketten en het onderhouden
            van Spring-microservices.
            <br /> <br />
            Ik los ook databaseproblemen op in de productieomgevingen en onderhoud SchemaRegistry en RegelNeef.
            Verder ben ik betrokken bij het onderhouden van projecten die zijn gebouwd met NextJS en Create React App.
            Dit omvat het implementeren van frontend-wijzigingen en het oplossen van bugs in de systemen.
          </InfoCard>
          <InfoCard companyName="Garden connect" period="2022 - 2023">
            Bij het bouwen van Progressive Web Apps (PWA's) omvatte het traject de omzetting van native mobiele apps
            naar een PWA met React en Next.js. Het was essentieel dat de PWA herbruikbaar was voor alle verschillende
            apps door middel van een templatesysteem. Een specifieke PWA-applicatie werd ontwikkeld voor het reserveren
            en bestellen van gerechten, inclusief integratie met Stripe.
            Dit project werd uitgevoerd in duo's. Daarnaast werden OpenAPI-specificaties gebruikt om een type-save applicatie
            op te zetten.
            <br /> <br />
            Het omzetten van legacy code naar React.js werd uitgevoerd in een SCRUM-team, waarbij de oude
            template code werd omgezet naar het moderne Next.js. Dit omvatte ook het updaten van dependencies en het uitfaseren van jQuery.
            Voor het gebouwde systeem werden Cypress end-to-end tests opgezet. Dit traject werd individueel uitgevoerd. Ook werd JavaScript
            omgezet naar TypeScript en werden Next.js pages geconverteerd naar de Next.js app router. Echter,
            dit laatste traject werd halverwege gestopt.
            <br /> <br />
            Daarnaast werd het CMS uitgebreid door Express.js klaar te zetten voor het front-end systeem.
            Hierdoor kon het front-end team verder werken zonder te hoeven wachten op de backend.
          </InfoCard>
        </div>
      </div>
      <div className="grid grid-cols-2 pt-14 border-t-2">
        <div>
          <p className="text-2xl font-bold">Vaardigheden</p>
        </div>
        <div>
          <ul className="list-disc">
            <li>JavaScript (Typescript)</li>
            <li>Java (Spring Boot, Jakarta EE)</li>
            <li>NodeJS (React/Next, Vue, Express, Nest, jQuery)</li>
            <li>SQL (MySQL, PostgreSQL)</li>
            <li>Firebase (NoSQL, Auth)</li>
            <li>Testen (Junit, Cypress, Mockito)</li>
            <li>Linux (bash)</li>
            <li>Git</li>
            <li>HTML & CSS (Bootstrap, Tailwind, SCSS)</li>
            <li>E-Commerce (Magento2, Woocommerce, Shopify)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}