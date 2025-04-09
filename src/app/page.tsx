export const dynamic = 'force-dynamic'

async function getServerSideProps() {
  const apiKey = process.env.HOMEKYND_API_KEY
  const companyId = process.env.HOMEKYND_COMPANY_ID
  
  if (!apiKey || !companyId) {
    throw new Error('Missing required environment variables')
  }
  
  return { apiKey, companyId }
}

export default async function Home() {
  const { apiKey, companyId } = await getServerSideProps()
  
  return (
    <ClientComponent apiKey={apiKey} companyId={companyId} />
  )
}

"use client";
import useHomekynd from "./useHomekynd";

// The company might want to put this in a .env file  //
const HOMEKYND_API_KEY = process.env.HOMEKYND_API_KEY ?? (() => { throw new Error('HOMEKYND_API_KEY is required') })()
const HOMEKYND_COMPANY_ID = process.env.HOMEKYND_COMPANY_ID ?? (() => { throw new Error('HOMEKYND_COMPANY_ID is required') })()
////////////////////////////////////////////////////////

function ClientComponent({ apiKey, companyId }) {
  const token = useHomekynd(companyId, apiKey)

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
