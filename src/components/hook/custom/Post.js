import useFetch from "./useFetch"

const Post = () => {
  const [items, loading] = useFetch('http://jsonplaceholder.typicode.com/posts?_limit=10')

  if (loading) {
    return 'Chargement...'
  }
  
  return (
    <div style={{ marginTop: '40px' }}>
      <ul>
        {items.map((post, id) => (
          <li key={id}><b>{post.title}</b></li>
        ))}
      </ul>
    </div>
  )
}

export default Post


// NB: On utilise une fction async car la methode fetch retourne une promesse or useEffect attends de retourner une fonction, du coup il faut lui passer une fonction a retouner.