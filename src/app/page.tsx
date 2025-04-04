"use client";
import useHomekynd from "./useHomekynd";

// The company might want to put this in a .env file  //
const HOMEKYND_API_KEY = process.env.HOMEKYND_API_KEY
const HOMEKYND_COMPANY_ID = process.env.HOMEKYND_COMPANY_ID
////////////////////////////////////////////////////////

export default function Home() {
  const token = useHomekynd(HOMEKYND_COMPANY_ID, HOMEKYND_API_KEY)

  return (
    <div>
      <h1>There is an iframe below</h1>
      <iframe
        src={`https://${process.env.NEXT_PUBLIC_HOMEKYND_COMPANY_URL}/?token=${token}`}
        width="100%"
        height="700px"
        title="Homekynd view"
      ></iframe>
    </div>
  );
}
