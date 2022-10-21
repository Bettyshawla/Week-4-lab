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
const mainEl = document.querySelector('main');

//TASK 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';

//TASK 1.2
mainEl.innerHTML = '<h1> SEI Rocks! </h1>';

//TASK 1.3
mainEl.classList.toggle('flex-ctr');

//============ Task 2 ===========

//TASK 2.0
const topMenuEl = document.getElementById('top-menu');

//TASK 2.1
topMenuEl.style.height = '100%';

//TASK 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//TASK 2.3
topMenuEl.classList.toggle('flex-around');

//============ Task 3 =============

//Task 3.1
menuLinks.forEach((link) => {
  const newATag = document.createElement('a');
  newATag.setAttribute('href', link.href);
  newATag.textContent = link.text;
  topMenuEl.append(newATag);

})
//*************** PART 2 ****************/

//Task 4.0
const subMenuEl = document.getElementById('sub-menu');

//Task 4.1
subMenuEl.style.height = '100%';

//Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

////Task 4.3
subMenuEl.classList.toggle('flex-around');

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

    console.log(evt.target.textContent)

    //Ensure that clicking ABOUT, CATALOG, etc. logs out about, catalog, etc. when a link is clicked.

  } else {

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
  } else {

  }

  //Task 5.4

  let removeLink = document.querySelectorAll("#top-menu")
  removeLink.forEach(function (evt) {
    evt.classList.remove("active")
  })
  //console.log(removeLink)

  //Task 5.5
  evt.target.classList.add("active")
  // console.log(evt.target)


  //Task 5.6  

  for (let i = 0; i < menuLinks.length; i++) {
    console.log('menuLinks')

    console.log(menuLinks[i])
    // console.log(menuLinks[i].subLinks)

    console.log(menuLinks[i].hasOwnProperty('subLinks'))


    showingSubMenu = menuLinks[i].hasOwnProperty('subLinks')
    if (menuLinks[i].hasOwnProperty('subLinks')) {

      console.log(menuLinks[i].subLinks)
    }

  }

 
   //Task 5.7



   // Task 5.8

})




