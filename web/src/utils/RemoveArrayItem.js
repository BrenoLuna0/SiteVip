function RemoveArrayItem(array, itemToRemove, key = "id") {
  return array.filter((item) => item[key] !== itemToRemove[key]);
}

export default RemoveArrayItem;
