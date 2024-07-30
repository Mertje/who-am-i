import { EMAIL_ADRESS, PHONE_NUMBER } from "../constant/personalInfo";

export default function footer() {

    return (
        <div className="mt-auto grid grid-cols-3 w-9/12 mx-auto">
            <div className="col-span-3 border-t-2 w-full" />
            <div className="m-2">
                <p>Telefoon:</p>
                <p>{PHONE_NUMBER}</p>
            </div>

            <div className="m-2">
                <p>Email:</p>
                <p><a href={`mailto:${EMAIL_ADRESS}`}>{EMAIL_ADRESS}</a></p>
            </div>
            {/* /TODO FILL with linkedin and github */}
            <div className="m-2">
                <p>Socials:</p>
            </div>
        </div>
    )
}