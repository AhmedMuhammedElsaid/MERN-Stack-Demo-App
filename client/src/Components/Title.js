import React from 'react'
import styled from 'styled-components'

export default function Title({title,center}) {
    return (
     <TitleWrapper center={center}>
        <div className="row mt-5">
                <div className="col">
                <h2 className="text-title">{title}</h2>
                <div className="title-underline"></div> 
            </div>
        </div>
     </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
text-transform: capitalize;
margin:35px;
color: #ea9a96;
text-align:${props => props.center? 'center':'left'};
    .title-underline{
    height:.25rem;
    width:7rem;
    background: #f8b24f;
    margin:${props => props.center? '0 auto':'0'};
    }
`