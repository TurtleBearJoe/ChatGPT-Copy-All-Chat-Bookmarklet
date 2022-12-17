/* 
Click on an element on a page. 
Copy the outer HTML code of a parent element with class that starts with 'felx'.
Add Date + time to the test */
javascript: (function() {
  function clickHandler(event) {
    var element = event.target;
    var parentElement = element.closest('.flex.flex-col.items-center.text-sm.h-full.dark\\:bg-gray-800');
    if (!parentElement) {
      alert('No parent element with class "flex flex-col items-center text-sm h-full dark:bg-gray-800" found');
      return;
    }
    var outerHTML = parentElement.outerHTML;
    var date = new Date();
    var dateString = date.toLocaleDateString();
    var timeString = date.toLocaleTimeString();
    var modifiedHTML = `<h1>${dateString} ${timeString}</h1>${outerHTML}`;
    navigator.clipboard.writeText(modifiedHTML)
      .then(() => {
        console.log('Outer HTML of parent element with class "flex flex-col items-center text-sm h-full dark:bg-gray-800" and added date and time copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy to clipboard: ', err);
      });
    alert('Outer HTML of parent element with class "flex flex-col items-center text-sm h-full dark:bg-gray-800" and added date and time copied to clipboard');
    document.removeEventListener('click', clickHandler);
  }

  document.addEventListener('click', clickHandler);
})();
