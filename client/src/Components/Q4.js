import React from 'react'
import Title from './Title'
import SchemaBcg from './Schema1.JPG'

export default function Q4() {
    return (
        <div>
        <Title title="Q4" center/>
            <img src={SchemaBcg} className="img-fluid"/>

            <h3> Select p.name  , p.id  ,  From player p , favouriteGame  fv , game g <br/>
                 Where fv.gameid = g.id and g.Type="SLOT"</h3>
        </div>
    )
}
