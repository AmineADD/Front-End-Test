const initState={
    parkActivation:false,
    achatPossible:true,
    parkPlus:false,
    etatStation:"Operative",
    distance:250,
    position:{ lat: 48.855846,lng:  2.347395},
    ListeResult:[]
}

const result=(state=initState,action)=>{
    if(action.type==="setParkActivation"){ 
        return{ ...state,
            parkActivation: action.value}
    }

    if(action.type==="setAchatPossible"){
        return{ ...state,
            achatPossible: action.value}
    }


    if(action.type==="setParkPlus"){
        return{ ...state,
            parkPlus: action.value}
    }

    if(action.type==="setEtatStation"){
        return{ ...state,
            etatStation: action.value}
    }

    if(action.type==="setDistance"){
        return{ ...state,
            distance: action.value,ListeResult: []}
    }


    if(action.type==="setPosition"){
        return{ ...state,
            position: action.value}
    }


    if(action.type==="setListeResult"){
        return{ ...state,
            ListeResult: action.value}
    }


    return state;

}



export default result;