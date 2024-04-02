export const saveListInStorage = (taskList) => {
    window.localStorage.setItem('taskList', JSON.stringify(taskList))
}


export const resetListFromStorage = () => {
    window.localStorage.removeItem('taskList')
}

export const removeItems = (indexes) => {
    const savedTaskList = JSON.parse(window.localStorage.getItem('taskList'));
    
    if (savedTaskList && Array.isArray(savedTaskList)) {
        // savedTaskList.splice(index, 1);
        indexes.map((index) => {
            savedTaskList.splice(index, 1)
        })
        saveListInStorage(savedTaskList)
    }
}

export const removeTaskFromStorage = (indexList) => {
    const taskListFromStorage = window.localStorage.getItem('taskList')
    const savedTaskList = JSON.parse(taskListFromStorage)
    indexList.map((idx) => {
        savedTaskList.splice(idx, 1)
    })
    saveListInStorage(savedTaskList)
}