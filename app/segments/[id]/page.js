'use client'
import Link from 'next/link';

const expertises  = [
    {id : 1, name : "Expertise1"},
    {id : 2, name : "Expertise2"},
]



export default function Expertise({ params }) {


    return (
    <div>
        <h1>Détail du segment {params.id} </h1>
        {expertises.map((e, index)=>(
        <Link key={index} href="/segments/[id]/expertise/[expertise]" as={`/segments/${params.id}/expertise/${e.id}`}>
            {e.id}
        </Link>

        
    ))}
    </div>  
    )
}
