let menu=document.querySelector('#menu-bars')
let navbar=document.querySelector('.navbar')

menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');


}

window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');

        var section=document.querySelectorAll('section');
        var navlink=document.querySelectorAll('header .navbar a')

        section.forEach(sec=>{
                var scrolled=window.scrollY;
                var secTop=sec.offsetTop;
                var secHeight=sec.ofsetHeight;
                var id=sec.getAttribute('id')

                if(scrolled>=secTop-100){
                        navlink.forEach(link=>{
                                link.classList.remove('active');
                                document.querySelector('header .navbar a[href*='+id+']').classList.add('active')


                        })
                }



        }
        )


}

document.querySelector('#search-icon').onclick=()=>{
        document.querySelector('#search-form').classList.toggle('active');

}

document.querySelector('#close').onclick=()=>{
        document.querySelector('#search-form').classList.remove('active');

}

