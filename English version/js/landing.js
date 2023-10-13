$("document").ready(function(){
    $(".icon").click(function(){
        $("#hidden").slideDown();
        $(".icon").css({
            transform: "rotate(180deg)",
            transition: "linear 0.2s"
        });
        $(".icon").removeClass("icon")
    })
})

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
    
}

