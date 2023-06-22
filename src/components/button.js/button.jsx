


const buttonCustom = ({label, handleClick}) => {
    return (
        <div>
            <button style={styles} onClick={handleClick}> 
                {label}
            </button>
        </div>
    )
}

export default buttonCustom;


const styles = {
    width: 120,
    height:32,
    backgroundColor:"#FFDB58",
    padding: "3 10",
    borderRadius: 8
}