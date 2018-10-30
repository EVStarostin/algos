/**
 * @description Разворачивание односвязного списка
 * @param {Object} list Односвязный список
 * @returns {Object} Развернутый односвязный список
 */
function revertList(list) {
  let tmp = list;
  let myList = null;

  while (tmp) {
    myList = { value: tmp.value, next: myList };
    tmp = tmp.next;
  }

  return myList;
}

module.exports = { revertList };
