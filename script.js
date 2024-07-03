let cont = document.querySelector("#container")
let btn = document.querySelector("#btn")
let x=16;
btn.addEventListener('click',()=> {
    x = prompt("enter number of squares per row")
    if(x>100 || x<=0){
        alert("invalid or too high value")
    }else{
        let child = cont.lastElementChild;
        while (child) {
            cont.removeChild(child);
            child = cont.lastElementChild;
        }
        for (let i =0 ; i<x ; i++){
            let grid1 = document.createElement("div");
                grid1.classList.add("grid");
                cont.appendChild(grid1);
                for ( let j = 0 ; j < x ;j++){
                    let grid2 = document.createElement("div");
                    grid2.classList.add("grid1");
                    grid2.addEventListener('mouseenter' ,() => { grid2.classList.add("black")});
                    grid1.appendChild(grid2);
                }
        }
    }

});


