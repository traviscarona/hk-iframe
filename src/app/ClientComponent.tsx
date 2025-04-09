'use client'

import useHomekynd from "./useHomekynd"

export default function ClientComponent({ 
  apiKey, 
  companyId 
}: { 
  apiKey: string
  companyId: string 
}) {
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
  )
} 