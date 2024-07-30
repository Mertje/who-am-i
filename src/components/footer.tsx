import { EMAIL_ADRESS, GITHUB_URL, LINKEDIN_URL, PHONE_NUMBER } from "../constant/personalInfo";

export default function footer() {

  return (
    <div className="mt-auto sm:grid sm:grid-cols-3 w-9/12 mx-auto">
      <div className="sm:col-span-3 border-t-2 w-full" />
      <div className="border-b py-3 sm:m-2 sm:pt-0 sm:pb-7 sm:border-0">
        <p className="font-semibold">Telefoon:</p>
        <p>{PHONE_NUMBER}</p>
      </div>

      <div className="border-b py-3 sm:m-2 sm:pt-0 sm:pb-7 sm:border-0">
        <p className="font-semibold">Email:</p>
        <p><a href={`mailto:${EMAIL_ADRESS}`}>{EMAIL_ADRESS}</a></p>
      </div>
      <div className="border-b py-3 sm:m-2 sm:pt-0 sm:pb-7 sm:border-0">
        <p className="font-semibold">Socials:</p>
        <div className="flex pt-1">
          <div className="w-7 mr-3">
            <a href={LINKEDIN_URL} target="_blank"><img src="./linkedIn.png" alt="Linkedin" /></a>
          </div>
          <div className="w-7">
            <a href={GITHUB_URL} target="_blank"><img src="./github.png" alt="Github" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}