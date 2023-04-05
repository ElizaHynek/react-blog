/* export const dateToStr = (date) => {
	let mm = (1 + date.getMonth()).toString().padStart(2, '0');
	let dd = date.getDate().toString().padStart(2, '0');
	let yyyy = date.getFullYear();
	return mm + '/' + dd + '/' + yyyy;
}; */

export const dateToStr = function(date){
  return date.toISOString().slice(0, 10);
};