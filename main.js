//methods to hide and show the dropdown content

function programmingList(){
    document.getElementById("myDropdown1").classList.toggle("show");
}
function databaseList() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
function WebTechList() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        let dropdown = document.getElementsByClassName("dropdown-content");
        let i;

        for(i = 0; i < dropdown.length; i++){
            let openDropdown = dropdown[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show')
            }
        }
    }
}
  