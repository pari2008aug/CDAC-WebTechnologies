import './App.css'

export function AppFooter(props){
    console.log(props)
    return(
        <div class='app-footer'>
            <p><i>&copy; All Rights Reserved under {props.company}-{props.year}</i></p>
        </div>
    )
}