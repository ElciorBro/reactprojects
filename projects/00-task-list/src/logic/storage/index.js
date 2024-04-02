export const saveList = (taskList) => {
    window.localStorage.setItem('taskList', JSON.stringify(taskList))
}


export const resetList = () => {
    window.localStorage.removeItem('taskList')
}

export const removeItems = (indexes) => {
    const savedTaskList = JSON.parse(window.localStorage.getItem('taskList'));
    
    if (savedTaskList && Array.isArray(savedTaskList)) {
        // savedTaskList.splice(index, 1);
        indexes.map((index) => {
            savedTaskList.splice(index, 1)
        })
        saveList(savedTaskList)
    }
}