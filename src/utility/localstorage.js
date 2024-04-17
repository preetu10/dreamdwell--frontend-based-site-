const getEstateFromLocalStorage=(email)=>{
    const getAll=localStorage.getItem(email);
    if(getAll){
        return JSON.parse(getAll);
    }
    return [];
};

const saveIntoLocalStorages=(estateId,email)=>{
    const getAll=getEstateFromLocalStorage(email);
    const checkEstate=getAll.find(r=>parseInt(r)===parseInt(estateId));
    if(!checkEstate){
        getAll.push(estateId);
        localStorage.setItem(email,JSON.stringify(getAll));
        return true;
    }
    else{
        return false;
    }
};



export {getEstateFromLocalStorage,saveIntoLocalStorages}