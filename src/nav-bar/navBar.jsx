import HomeIcon from "./icon.jsx"

const AlertQuienesSomos = () => {
    return (
        alert ("Somos Piriburger, las mejores burgers de la city")
    )
}
const alertBurgers =() =>{
    return(
        alert ("Coming Soon...")
    )
}
const bienvenidos =() =>{
    return (
        alert ("Bienvenidos a la Web de Piriburger")
    )
}

const NavBar = () => {

    return (
        <div style={ { backgroundColor: "black", padding: 1,height:100, display:"flex", flexBox:"row",justifyContent:"space-between" } }>
            <h1 style={ {color:"#FFDB58", fontSize:30, textAlign:"left",marginLeft:100,marginTop:25, letterSpacing:10, textTransform:"uppercase" } } onClick={bienvenidos}>Piriburger</h1>
            <div style={ {display:"flex", flexBox:"row", justifyContent: "center", gap:50 } }>
                <h2 style={ {color:"#FFDB58", fontSize:18, marginTop:35 }}   onClick ={AlertQuienesSomos}> Quienes somos?</h2>
                <h2 style={ {color:"#FFDB58", fontSize:18, marginTop:35  }} onClick = { alertBurgers } >Burgers</h2>
                <HomeIcon sx={{ color: "#FFDB58"  }} fontSize = "large" style={ { marginTop:30, marginRight:60 }} onClick={bienvenidos} />
            </div>
        </div>
    )
}

export default NavBar;

