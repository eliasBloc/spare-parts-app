// This file was created in the interest of increasing the lifecycle of my mouse wheel

const generateTemplates = function() {
  console.log('templates are being generated')
  
  if (STORE.pageSelection === 1) {
    return`
    <h2>Lets find Meet Ups</h2><form id="js-searchForm"><label for="queryLocation">Where do you want to meet?</label><input type="text" name="queryLocation" id="js-queryLocation">
    `;
  } else if (STORE.pageSelection === 2) {
    return`
    <h2>Search It!</h2><form id="js-searchForm"><label for="lastName">Enter Last Name</label><input type="text" name="lastName" id="js-lastName">
    `;
  }

}