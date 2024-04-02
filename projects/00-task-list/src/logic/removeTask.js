export const removeFromTaskList = (taskList, indexes) => {
    const updatedTaskList = taskList.filter((_, index) => !indexes.includes(index));
    return updatedTaskList; 
}