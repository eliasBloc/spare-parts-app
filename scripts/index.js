// Quick Search //
const startUp = function() {
  // any necessary actions needed to display the original start page or load interactive elements.
  $('nav').on('click','#js-congregate', event => {
    /* console.log('Congregate Detected'); */
    STORE.pageSelection = 1;
    const templateString = generateTemplates();
    console.log(templateString)
    $('#js-search').toggleClass('hidden');
    $('#js-search').html(templateString);
  })
  $('nav').on('click','#js-query',event => {
    /* console.log('Query Detected'); */
    STORE.pageSelection = 2;
    const templateString = generateTemplates();
    /* console.log(templateString) */
    $('#js-search').toggleClass('hidden');
    $('#js-search').html(templateString);
  })
};

const handleCongregate = function() {
  // once the congregate page has loaded any submissions or clicks will be handled by this function
};

const handleQuery = function() {
  
};

const app = function() {
  startUp();
  handleCongregate();
  handleQuery();
};

$(app);