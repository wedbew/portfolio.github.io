if(function(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("../cached_site.js")});var e=0,t=0,n=0,i=0,a=1/30;$(window).on("mousemove click",function(n){var i=Math.max(-100,Math.min(100,$(window).width()/2-n.clientX)),a=Math.max(-100,Math.min(100,$(window).height()/2-n.clientY));e=20*i/100,t=10*a/100}),function o(){n+=(e-n)*a,i+=(t-i)*a,translate="translate("+n+"px, "+i+"px) scale(1.1)",$(".bg").css({"-webit-transform":translate,"-moz-transform":translate,transform:translate}),window.requestAnimationFrame(o)}(),document.querySelector("#menu-button").addEventListener("click",function(){document.querySelector("#mobile-navigation").style.right="0"}),document.querySelector("#close-mobile").addEventListener("click",function(){document.querySelector("#mobile-navigation").style.right="-200px"})}(),"/index.html"==window.location.pathname&&(CookieAlert.init(),$("#typed").typed({strings:["<span class='dark__blue'>const</span> <span class='blue'>programmer</span> = <span class='dark__blue'>new</span> <span class='green'>Developer</span>(<span class='red'>'Marcin'</span>,<span class='red'>'Bawolski'</span>,<span class='red'>'Frontend'</span>);"],showCursor:!0,cursorChar:"_",autoInsertCss:!0,typeSpeed:40,startDelay:300,loop:!1,showCursor:!1})),"/o-mnie.html"==window.location.pathname&&window.innerWidth<690&&$(window).scroll(function(){$(this).scrollTop()>300?$("#bio").css("opacity","1"):$("#bio").css("opacity","0")}),"/technologie.html"==window.location.pathname&&$(".btn-tech").on("click",function(){$(this).addClass("active").siblings().removeClass("active");var e=$(this).attr("id");"senior"==e?$("svg").each(function(){$(this).data("info")==e&&($(this).find("path").addClass(e),$("path").each(function(){$(this).removeClass("mid").removeClass("junior")}))}):"mid"==e?$("svg").each(function(){$(this).data("info")==e&&($(this).find("path").addClass(e),$("path").each(function(){$(this).removeClass("senior").removeClass("junior")}))}):"junior"==e?$("svg").each(function(){$(this).data("info")==e&&($(this).find("path").addClass(e),$("path").each(function(){$(this).removeClass("mid").removeClass("senior")}))}):"all"==e&&$("path").each(function(){$(this).removeClass("junior").removeClass("mid").removeClass("senior")})}),"/projekty.html"==window.location.pathname){AOS.init();var modal=document.querySelector("#modal"),modalContent=document.querySelector("#modal__content"),figcaption=document.querySelectorAll("figcaption"),closeButton=document.querySelector("#close__modal"),modalTitle=document.querySelector("#modal__title"),modalDescription=document.querySelector("#modal__description"),modalLinkTitle=document.querySelector("#modal__link--title"),modalLink=document.querySelector("#modal__link"),imageCointainer=document.querySelector("#image__container"),mainImage=document.querySelector("#main__image"),thumbnailContainer=document.querySelector("#thumbnail__container"),thumbnail=document.querySelectorAll(".thumbnail"),firstImage=document.querySelector("#first__image"),secondImage=document.querySelector("#second__image"),thirdImage=document.querySelector("#third__image");figcaption.forEach(function(e){e.addEventListener("click",function(){modalContent.classList.remove("modal__content__unclicked"),modal.classList.remove("modal__unclicked"),modal.classList.add("modal__clicked"),modalContent.classList.add("modal__content__clicked"),modalTitle.innerText=e.querySelector(".hidden__title").innerText,modalDescription.innerText=e.querySelector(".hidden__description").innerText,modalLinkTitle.innerText=e.querySelector(".hidden__link--title").innerText,modalLink.innerText=e.querySelector(".hidden__link").innerText;var t=document.createElement("img");t.setAttribute("src","/img/pdf.svg"),t.setAttribute("class","download__icon");var n=document.createElement("img");n.setAttribute("src","/img/zip.svg"),n.setAttribute("class","download__icon");var i=document.createElement("img");if(i.setAttribute("src","/img/link.svg"),i.setAttribute("class","download__icon"),i.setAttribute("class","download__icon--link"),"Renoverend"==modalLink.innerText){modalLink.innerText="";var a=document.createElement("a");a.setAttribute("href","/download/Renoverend.pdf"),a.setAttribute("download",""),a.setAttribute("class","modal__link__download");var o=document.createTextNode("Renoverend");a.appendChild(o),modalLink.appendChild(a),modalLink.insertBefore(t,a)}else if("Wiltex"==modalLink.innerText){modalLink.innerText="";var l=document.createElement("a");l.setAttribute("href","/download/Wiltex.pdf"),l.setAttribute("download",""),l.setAttribute("class","modal__link__download");var r=document.createTextNode("Wiltex");l.appendChild(r),modalLink.appendChild(l),modalLink.insertBefore(t,l)}else if("Projekt opakowania"==modalLink.innerText){modalLink.innerText="";var d=document.createElement("a");d.setAttribute("href","/download/Mockup.zip"),d.setAttribute("download",""),d.setAttribute("class","modal__link__download");var s=document.createTextNode("Mockup");d.appendChild(s),modalLink.appendChild(d),modalLink.insertBefore(n,d)}else if("Zniczomaty"==modalLink.innerText){modalLink.innerText="";var c=document.createElement("a");c.setAttribute("href","http://zniczomaty.com.pl/"),c.setAttribute("target","_blank"),c.setAttribute("class","modal__link__download");var m=document.createTextNode("www.zniczomaty.pl");c.appendChild(m),modalLink.appendChild(c),modalLink.insertBefore(i,c)}else if("Edutoria"==modalLink.innerText){modalLink.innerText="";var u=document.createElement("a");u.setAttribute("href","http://edutoria.pl/"),u.setAttribute("target","_blank"),u.setAttribute("class","modal__link__download");var p=document.createTextNode("www.edutoria.pl");u.appendChild(p),modalLink.appendChild(u),modalLink.insertBefore(i,u)}if(thumbnail.forEach(function(e){e.addEventListener("click",function(){mainImage.style.opacity="0",setTimeout(function(){mainImage.src=e.children[0].src,mainImage.style.opacity="1"},300)})}),"Annas Pflegedienst"==e.querySelector(".hidden__title").innerText){document.querySelector("#modal__content").classList.add("modal__content--video");var _=document.createElement("iframe");_.setAttribute("src","https://www.youtube.com/embed/BjS0cwt2mdI"),_.setAttribute("id","annas"),_.setAttribute("class","modal__video"),_.setAttribute("frameborder","0"),_.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),_.setAttribute("allowfullscreen",""),imageCointainer.appendChild(_),document.querySelector("#annas").style.display="block",mainImage.style.display="none",thumbnailContainer.style.display="none",_.style.height=width/1.77+"px"}else if("Animacja"==e.querySelector(".hidden__title").innerText){document.querySelector("#modal__content").classList.add("modal__content--video");var h=document.createElement("iframe");h.setAttribute("src","https://www.youtube.com/embed/i4bT-exOPJ0"),h.setAttribute("id","animation"),h.setAttribute("class","modal__video"),h.setAttribute("frameborder","0"),h.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),h.setAttribute("allowfullscreen",""),imageCointainer.appendChild(h),document.querySelector("#animation").style.display="block",mainImage.style.display="none",thumbnailContainer.style.display="none"}else mainImage.src="img/"+e.querySelector(".hidden__title").innerText+"/1.jpg",firstImage.src="img/"+e.querySelector(".hidden__title").innerText+"/1.jpg",secondImage.src="img/"+e.querySelector(".hidden__title").innerText+"/2.jpg",thirdImage.src="img/"+e.querySelector(".hidden__title").innerText+"/3.jpg"})}),closeButton.addEventListener("click",function(){modalContent.classList.add("modal__content__unclicked"),modal.classList.add("modal__unclicked"),setTimeout(function(){modal.classList.remove("modal__clicked"),modalContent.classList.remove("modal__content__clicked")},400),thumbnailContainer.style.display="flex",mainImage.style.display="block",thumbnailContainer.style.display="flex",document.querySelector("#modal__content").classList.remove("modal__content--video"),document.querySelector("#animation")&&document.querySelector("#animation").remove(),document.querySelector("#annas")&&document.querySelector("#annas").remove(),thirdImage.parentElement.style.display="block"})}if("/kontakt.html"==window.location.pathname){function submitForm(){var e=$("#nameInput").val(),t=$("#emailInput").val(),n=$("#orgInput").val(),i=$("#messageInput").val();$.ajax({type:"POST",url:"php/contactform.php",data:"name="+e+"&email="+t+"&org="+n+"&msg="+i,success:function(e){"success"==e&&formSuccess()}})}function formSuccess(){$("#msgSubmit").css("display","block"),$("#msgSubmit").hide(),$("#msgSubmit").fadeIn(1e3),$("#nameInput").val(""),$("#emailInput").val(""),$("#orgInput").val(""),$("#messageInput").val("")}$("#msgSubmit").hide(),$("#contactForm").submit(function(e){e.preventDefault(),submitForm()})}