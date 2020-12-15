function myFunction2() {
    let arr = [60, 100, 80, 90, 50, 70];
    let arr2 = arr;
    console.log(arr);

    function sortArr() {
        arr.sort(function(a, b){return b-a});
        console.log(arr);

        arr2.sort(function(a, b){return a-b});
        console.log(arr2);
    }
    sortArr();
}