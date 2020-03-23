function intro(){
    console.log("hello");
}

$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  intro();
});

console.log("testing");
