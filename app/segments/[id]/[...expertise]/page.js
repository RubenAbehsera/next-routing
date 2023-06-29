'use client'

const expertises  = [
    {id : 1, name : "ExpertiseContent1"},
    {id : 2, name : "ExpertiseContent2"},
]



export default function ExpertiseContent(params) {

    console.log(params.params)
    return (
    <div>
        <h1>Détail de l Expertise {params.params.expertise[1]}</h1>
    </div> 
    )
}
