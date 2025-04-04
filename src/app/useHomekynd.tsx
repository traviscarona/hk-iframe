import { useEffect, useState } from "react";

const useHomekynd = (companyId: string, apiSecret: string) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      try {
        const res = await fetch(`https://${process.env.NEXT_PUBLIC_HOMEKYND_TOKEN_GENERATION_URL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ api_secret: apiSecret, id: companyId })
        });
        const data = await res.json();
        if (res.ok) 
          setToken(data.token);
        } else {
          console.error("Error fetching token:", data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    getToken();
  }, []);
  return token;
}

export default useHomekynd;