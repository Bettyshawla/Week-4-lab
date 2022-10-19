var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  
  const mainEl = document.querySelector('main');
  
  mainEl.style.backgroundColor = '#4a4e4d';
  
  mainEl.innerHTML = '<h1> SEI Rocks! </h1>';
  
  mainEl.classList.toggle('flex-ctr');
  
  const topMenuEl = document.getElementById('top-menu');
  
  topMenuEl.style.height = '100%';
  
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  
  topMenuEl.classList.toggle('flex-around');
  
  
  menuLinks.forEach((link) => {
    const newATag = document.createElement('a');
    newATag.setAttribute('href', link.href);
    newATag.textContent = link.text;
    topMenuEl.append(newATag);

  
  })
  
  const subMenuEl = document.getElementById('sub-menu');
  
  subMenuEl.style.height = '100%';
  
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
  
  subMenuEl.classList.toggle('flex-around');
  
  subMenuEl.style.position = 'absolute';
  
  subMenuEl.style.top = '0';
  
  const topMenuLinks = document.querySelectorAll('#top-menu > a');
  
  let showingSubMenu = false;
  
  //5.2
  
  topMenuEl.addEventListener('click', (evt) => {

    evt.preventDefault();

    if(evt.target.tagName === 'A'){

      console.log(evt.target.textContent)

      //Ensure that clicking ABOUT, CATALOG, etc. logs out about, catalog, etc. when a link is clicked.

    } else{

    }
    
    // 5.3

    if(evt.target.classList.contains('active')){
        //5.3.1
      evt.target.classList.remove('active');
        //5.3.2
      showingSubMenu = false;
        //5.3.3
      subMenuEl.style.top = '0';
        //5.3.4
      return
    } else{

    }

    //5.4

    let removeLink = document.querySelectorAll("#top-menu")
    removeLink.forEach(function (evt){
        evt.classList.remove("active")
    })
//console.log(removeLink)

        //5.5
    evt.target.classList.add("active")
    // console.log(evt.target)


        //5.6   
            if(evt.target.textContent != "about"){
                showingSubMenu = true
                console.log(showingSubMenu)
              
             }else {
                showingSubMenu = false
               console.log(showingSubMenu)
              }
        })
       
    
  console.log(topMenuLinks)