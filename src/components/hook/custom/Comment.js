// Plus besoin de useState/useEffect car on n'a le hook personnalisé

// import { useState, useEffect } from "react"
import useFetch from "./useFetch"

const Comment = () => {
  // const [comments, setComments] = useState([])
  // const [loading, setLoading] = useState(true)
  
  const [items, loading] = useFetch('http://jsonplaceholder.typicode.com/comments?_limit=10')

  // useEffect(() => {
  //   (async () => {
  //     // Aller chercher les données
  //     const data = await fetch('http://jsonplaceholder.typicode.com/comments?_limit=5')

  //     // Récuprer les données au format json
  //     const responseData = await data.json()

  //     // Si l'url est valide
  //     if(data.ok) {
  //       setComments(responseData)
  //       console.log(responseData);
  //     } else {
  //       alert('Impossible de récupérer les données !')
  //     }

  //     // Lorsque les données on été chargées
  //     setLoading(false)
  //   })()
  // }, [])

  if (loading) {
    return 'Chargement en cours...'
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {items.map((comment, id) =>
          <tr key={id}>
            <td>{comment.name}</td>
            <td>{comment.email}</td>
            <td>{comment.body}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Comment
