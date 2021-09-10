tm_nav = document.getElementById("tm_nav");
ci_nav = document.getElementById("ci_nav");
p_nav = document.getElementById("p_nav");
mp_nav = document.getElementById("mp_nav");
ctr_nav = document.getElementById("ctr_nav");
c_nav = document.getElementById("c_nav");
gwc_nav = document.getElementById("gwc_nav");

tm_nav.style.animation = "hover 0.2s forwards";

window.addEventListener("scroll", function (){
    let scroll = this.scrollY;

    if(scroll >= 0 && scroll < 250){
        tm_nav.style.animation = "hover 0.2s forwards";
    }
    else if(scroll < 0 || scroll > 250){
        tm_nav.style.animation = "";
    }

    if(scroll >= 250 && scroll < 900){
        ci_nav.style.animation = "hover 0.2s forwards";
    }
    else if(scroll < 250 || scroll > 900){
        ci_nav.style.animation = "";
    }

    if(scroll >= 900 && scroll < 1650){
        p_nav.style.animation = "hover 0.2s forwards";
    }
    else if(scroll < 900 || scroll > 1650){
        p_nav.style.animation = "";
    }

    if(scroll >= 1650 && scroll < 2380){
        mp_nav.style.animation = "hover 0.2s forwards";
    }
    else if(scroll < 1650 || scroll > 2380){
        mp_nav.style.animation = "";
    }

    if(scroll >= 2380 && scroll < 3060){
        ctr_nav.style.animation = "hover 0.2s forwards";
    }
    else if(scroll < 2430 || scroll > 3060){
        ctr_nav.style.animation = "";
    }

    if(scroll >= 3060 && scroll < 3820){
        c_nav.style.animation = "hover 0.2s forwards";
    }
    else if(scroll < 3060 || scroll > 3820){
        c_nav.style.animation = "";
    }

    if(scroll >= 3820){
        gwc_nav.style.animation = "hover 0.2s forwards";
    }
    else if(scroll < 3820){
        gwc_nav.style.animation = "";
    }
});