import React from 'react'
import classes from './About.module.css'

const About = () => {
    return (
        <div>
            <div className={classes.typing}>
                <div className={classes.typingEffect}>{'React Posts'}</div>
            </div>
            <ul className={classes.list}>
                <li>{'Function Components'}</li>
                <li>{'Controlled And Uncontrolled Components'}</li>
                <li>{'Tailwind, CSS Modules'}</li>
                <li>{'useState, useEffect, useMemo, useRef Hooks'}</li>
                <li>{'Post Creation Form'}</li>
                <li>{'Conditional Rendering'}</li>
                <li>{'Modal Dialog. Reusable UI components'}</li>
                <li>{'Sorting. Drop-down list'}</li>
                <li>{'Search. Filtration'}</li>
                <li>{'Higher-Order Components'}</li>
                <li>{'Working with the server. Axios'}</li>
                <li>{'API. PostService'}</li>
                <li>{'Error Handling. useFetching'}</li>
                <li>{'Pagination. Dynamic pagination. useObserver, useHistory, useParams'}</li>
                <li>{'Animations. React transition group'}</li>
                <li>{'React router. Page navigation. BrowserRouter, Route, Switch, Redirect'}</li>
                <li>{'Global Data. User authorization. useContext'}</li>
            </ul>
        </div>
    )
}

export default About
