import React, {useState,useEffect} from 'react'

const HeadingWidget =({widget}) =>{

    return(
        <div>
            <h1>Widget Heading {widget.id}</h1>

        </div>
    )
}
export default HeadingWidget