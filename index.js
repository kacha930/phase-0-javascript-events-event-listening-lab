function addingEventListener() {
    //because we are accessing it by its id 
    //remember get element not elements
    const button = document.getElementById('button');
    button.addEventListener('click', function(){
        alert("Button was clicked");
    });
}
addingEventListener();
