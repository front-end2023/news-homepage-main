function openMenu(){
    document.getElementById("second_list").style.display = "block";
    document.getElementById("sub_list").style.width = "50%";
    document.getElementById("open-menu").style.display = "none";
}
function closeMenu(){
    document.getElementById("second_list").style.display = "none";
    document.getElementById("sub_list").style.width = "0";
    document.getElementById("open-menu").style.display = "block";
}