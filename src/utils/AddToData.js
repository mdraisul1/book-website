const getItemsData = () => {
    const getStorageData = localStorage.getItem("redList");

    if (getStorageData){
        const getItemsData = JSON.parse(getStorageData);
        return getItemsData;
    }else{
        return [];
    }
}

const setItemsData = (id) => {
    const setStorageBook = getItemsData();

    if(setStorageBook.includes(id)){
        console.log("already data storage!");
    }else{
        setStorageBook.push(id);
        const data = JSON.stringify(setStorageBook);
        localStorage.setItem('redList', data);
    }
}

export {setItemsData};