export const saveScreenInStorage = (screen) => {
    window.localStorage.setItem('screen', JSON.stringify(screen));
}

export const resetScreenInStorageFromStorage = () => {
    window.localStorage.removeItem('screen');
}

export const savePreResultInStorage = (screen) => {
    window.localStorage.setItem('historyList', JSON.stringify(screen));
}

export const resetPreResultInStorageFromStorage = () => {
    window.localStorage.removeItem('historyList');
}

export const saveOperationListInStorage = (opList) => {
    window.localStorage.setItem('opList', JSON.stringify(opList));
}

export const resetOperationListFromStorage = () => {
    window.localStorage.removeItem('opList');
}