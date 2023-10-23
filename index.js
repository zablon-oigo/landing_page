// Open Side Menu
const openMenu=()=>{
const open=document.querySelector('#open')
const close=document.querySelector('#close-menu')
const menu=document.querySelector('#menu')
const toggleMenu=()=>{
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')

}
open.addEventListener('click',toggleMenu)
close.addEventListener('click',toggleMenu)

}
document.addEventListener('DOMContentLoaded',openMenu)


// Image 
function updateImageBasedOnScreenSize() {
    // Get the screen width
    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    const desktopImage = 'images/image-hero-desktop.png';
    const mobileImage = 'images/image-hero-mobile.png';
    
    const image = document.querySelector('#image');
    
    if (screenWidth < 768) {
        image.src = mobileImage;
        console.log("Small screen detected.");
    } else if (screenWidth < 1024) {
        image.src = desktopImage;
        console.log("Medium screen detected.");
    } else {
        image.src = desktopImage;
        console.log("Large screen detected.");
    }
}

// Call the function initially
updateImageBasedOnScreenSize();

// Set up an interval to check and update the screen size every 1 seconds
setInterval(updateImageBasedOnScreenSize, 1000); 





// NavBar DropDown
const arrowUpImage='images/icon-arrow-up.svg'
const arrowDownImage='images/icon-arrow-down.svg'
const dropDownMenu=()=>{
    const drop=document.querySelector('#drop')
    const dropArrow=document.querySelector('#dropArrow')
   
    const dropMenu=document.querySelector('#dropDown')
    
    const downMenu=()=>{
        dropMenu.classList.toggle('hidden')
        dropMenu.classList.toggle('flex')
        
        setTimeout(() => {
            if (dropMenu.classList.contains('hidden')) {
                dropArrow.src = arrowDownImage;
            } else {
                dropArrow.src = arrowUpImage;
            }
        }, 100); 
      

        
    }
    drop.addEventListener('mouseover',downMenu)
    drop.addEventListener('mouseout',downMenu)
    
}

document.addEventListener('DOMContentLoaded',dropDownMenu)

const CompanyMenu=()=>{
    const company=document.querySelector('#company')
    const companyImage=document.querySelector('#companyImage')
    const companyDrop=document.querySelector('#companyMenu')
     
    const toggleMenu=()=>{
        companyDrop.classList.toggle('hidden')
        companyDrop.classList.toggle('flex')

        if (companyDrop.classList.contains('hidden')){
            companyImage.src = arrowDownImage;

        }
        else{
            companyImage.src = arrowUpImage;
        }
    }
    company.addEventListener('mouseover',toggleMenu)
    company.addEventListener('mouseout',toggleMenu)


}
document.addEventListener('DOMContentLoaded',CompanyMenu)


// SideBar Menu
const sidebarMenu=()=>{
    const features=document.querySelector('#sideFeatures')
    const sideImage=document.querySelector('#dropArrow')
    const sideMenu=document.querySelector('#featuresMenu')

    const toggleMenu=()=>{
        sideMenu.classList.toggle('hidden')
        sideMenu.classList.toggle('flex')
        

       if(sideMenu.classList.contains('hidden')){
        sideImage.src=arrowDownImage
       }
       else{
        sideImage.src=arrowUpImage
       }
    }
    
    features.addEventListener('mouseover',toggleMenu)
    features.addEventListener('mouseout',toggleMenu)
    



}
document.addEventListener('DOMContentLoaded',sidebarMenu)

const sideCompanyMenu=()=>{
    const sideCompanyMenu=document.querySelector('#sideCompanyMenu')
    const sideCompany=document.querySelector('#sideCompany')
    const sideImage=document.querySelector('#dropArrow')
    const toggleMenu=()=>{
        sideCompanyMenu.classList.toggle('hidden')
        sideCompanyMenu.classList.toggle('flex')
        if(sideCompanyMenu.classList.contains('hidden') ){

            sideImage.src=arrowDownImage
       }
       else{
        sideImage.src=arrowUpImage
       }
    }
    sideCompany.addEventListener('mouseover',toggleMenu)
    sideCompany.addEventListener('mouseout',toggleMenu)
}
document.addEventListener('DOMContentLoaded',sideCompanyMenu)