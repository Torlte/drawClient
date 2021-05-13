import axios from "axios";

export function getDraw(){
    return (dispatch)=>{
        axios.get("http://localhost:5000/draw").then(res => {
            dispatch({
                type: "GET_DRAW_FROM_SERVER", 
                payload: res.data
            })
        })
    }
}