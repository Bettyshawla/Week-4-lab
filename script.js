var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

//TASK 1.0
var mainEl = document.querySelector('main');

//TASK 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';

//TASK 1.2
mainEl.innerHTML = '<h1> SEI Rocks! </h1>';

//TASK 1.3
mainEl.classList.add('flex-ctr');

//============ Task 2 ===========

//TASK 2.0
const topMenuEl = document.getElementById('top-menu');

//TASK 2.1
topMenuEl.style.height = '100%';

//TASK 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//TASK 2.3
topMenuEl.classList.add('flex-around');

//============ Task 3 =============

//Task 3.1
menuLinks.forEach((link) => {
  const newATag = document.createElement('a');
  newATag.setAttribute('href', link.href);
  newATag.textContent = link.text;
  topMenuEl.append(newATag);
})
//*************************************************************************** PART 2 ****************************************************************************/

//Task 4.0
let subMenuEl = document.getElementById('sub-menu');

//Task 4.1
subMenuEl.style.height = '100%';

//Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

////Task 4.3
subMenuEl.classList.add('flex-around');

////Task 4.4
subMenuEl.style.position = 'absolute';

//Task 4.5
subMenuEl.style.top = '0';

//========== TASK 5 ==========

//Task 5.1
const topMenuLinks = document.querySelectorAll('#top-menu > a');

let showingSubMenu = false;

//Task 5.2

topMenuEl.addEventListener('click', (evt) => {

  evt.preventDefault();

  if (evt.target.tagName === 'A') {

    console.log(evt.target.textContent);
    //Ensure that clicking ABOUT, CATALOG, etc. logs out about, catalog, etc. when a link is clicked.
  }

  //Task 5.3

  if (evt.target.classList.contains('active')) {
    //5.3.1
    evt.target.classList.remove('active');
    //5.3.2
    showingSubMenu = false;
    //5.3.3
    subMenuEl.style.top = '0';
    //5.3.4
    return
  }

  //Task 5.4

  let removeLink = document.querySelectorAll("#top-menu");
  removeLink.forEach(function (evt) {
    evt.classList.remove("active");
  })


  //Task 5.5
  evt.target.classList.add("active");

  //Task 5.6  
  let currentLink = {};

  for (let i = 0; i < menuLinks.length; i++) {

    if (menuLinks[i].text === evt.target.textContent) {
      showingSubMenu = menuLinks[i].hasOwnProperty('subLinks');
      currentLink = menuLinks[i]
    }
    //no else statement is needed
  }

  //Task 5.7

  if (showingSubMenu === true) {
    buildSubMenu(currentLink)
    subMenuEl.style.top = '100%'
  } else {
    subMenuEl.style.top = "0%"
  }

  // Task 5.8

  function buildSubMenu() {
    subMenuEl.innerHTML = '';
    console.log(subMenuEl);
    currentLink.subLinks.forEach((link) => {
      let aTag = document.createElement('a')
      aTag.setAttribute('href', link.href)
      aTag.textContent = link.text;
      subMenuEl.append(aTag)
    });
  }
  if(evt.target.text === "about"){
    mainEl.innerHTML = `<h1> ${evt.target.text} </h1>`
    mainEl.style.textTransform = 'upperCase'
  
  }
})


// Task 6.0


subMenuEl.addEventListener('click', (evt) => {

  evt.preventDefault();

  if (evt.target.tagName === 'A') {

    console.log(evt.target.textContent)
  }

  // Task 6.1

  showingSubMenu === false;
  subMenuEl.style.top = '0';

  // Task 6.2

  topMenuLinks.forEach((args) => {
    args.classList.remove('active')
  })


  // // Task 6.3

  // mainEl.lastElementChild.textContent = evt.target.textContent;- //this does work too
  mainEl.innerHTML = `<h1> ${evt.target.text} </h1>`;
  mainEl.style.textTransform = 'upperCase'
  
  // Task 6.4
  //i did this on the topMenuEl event listner

})
