import Link from 'next/link';



const segments  = [
  {id : 1, name : "Segment1"},
  {id : 2, name : "Segment2"},
]



export default function Home() {
  return (
    <div>
      <h1>Liste des segments</h1>

      {segments.map((s, index)=>(
        <Link key={index} href={ "/segments/[id]"} as={`/segments/${s.id}`}>
            <li>{s.name}</li>
        </Link>

        
      ))}
    </div>  
  )
}
