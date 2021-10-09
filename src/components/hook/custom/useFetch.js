import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [state, setFetch] = useState({
    items: [],
    loading: true
  })

  useEffect(() => {
    (async () => {
      // Aller chercher les données
      const data = await fetch(url)
      const responseData = await data.json()

      // Si l'url est valide
      if(data.ok) {
        setFetch({
          items: responseData,
          loading: false
        })
      } else {
        alert('Url non valide ! Vérifier l\'url puis réessayer')

        setFetch({
          items: [],
          loading: false
        })
      }
    })()
  }, [url])

  // Ce return (items et loading) sera utliser dans les differents composants
  return [
    state.items,
    state.loading
  ]
}

export default useFetch
