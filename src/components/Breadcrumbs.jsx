import '@scss/breadcrumbs.scss'
export default function BreadCrumbs(props){   
    return(
        <>
            <div className="breadcumbs">
                <div className="container">
                    {props.text}
                </div>
            </div>
        </>
    )
}