import ClientComponent from "./ClientComponent"

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
