function getId(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');

    return myParam;
}