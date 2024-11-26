

// var name = document.getElementById("name").value;


document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('playerForm');
    const positionSelect = document.getElementById('position');
    
  
    const goalkeeperFields = document.querySelectorAll('.form-group-gk');
    const playerFields = document.querySelectorAll('.form-group-pl');
    
  
    function toggleGoalkeeperFields() {
       
        if (positionSelect.value === 'GK') {
            
            goalkeeperFields.forEach(field => field.style.display = 'block');
            playerFields.forEach(field => field.style.display = 'none');
        } else {
            
            goalkeeperFields.forEach(field => field.style.display = 'none');
            playerFields.forEach(field => field.style.display = 'block');
        }
    }

    positionSelect.addEventListener('change', toggleGoalkeeperFields);
    toggleGoalkeeperFields(); 
    
    
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        
        const name = document.getElementById("name");
        const photo = document.getElementById("photo").value;
        const nationality = document.getElementById("nationality").value;
        const club = document.getElementById("club").value;
        const rating = document.getElementById("rating").value;
        const position = positionSelect.value;
        // console.log(name.value)
       






        var lwcad = document.getElementById("lwcard"); // Parent
        var test = document.getElementById("imageElement"); // Child
        var test_name = document.getElementById("test_name"); // Child
        test=document.createElement("img");
        test.setAttribute("src", `${photo.value}`)
        test.setAttribute("hieght", "100px");
        test.setAttribute("width", "100px");
        lwcad.appendChild(test);
        
        let a = document.createElement("p");
        a.style.color = "red";
        a.innerText = name.value;
        test_name.appendChild(a);
        
        
        

        // var test = document.createElement("img");
        // test.setAttribute("src", `${photo.value}`);  
        // test.setAttribute("height", "100px");        
        // test.setAttribute("width", "100px");         
        // lwcad.appendChild(test);                     




        

        if (!name || !photo || !nationality || !club || !position || !rating) {
            alert("Please fill in all fields.");
            return;
        }

        if (position === "GK") {
            diving = document.getElementById("diving").value;
            handling = document.getElementById("handling").value;
            kicking = document.getElementById("kicking").value;
            reflexes = document.getElementById("reflexes").value;
            speed = document.getElementById("speed").value;
            positioning = document.getElementById("positioning").value;

            if (!diving || !handling || !kicking || !reflexes || !speed || !positioning) {
                alert("Please fill in all fields.");
                return;
            }

        } else {
      
            pace = document.getElementById("pace").value;
            shooting = document.getElementById("shooting").value;
            passing = document.getElementById("passing").value;
            dribbling = document.getElementById("dribbling").value;
            defending = document.getElementById("defending").value;
            physical = document.getElementById("physical").value;

            if (!pace || !shooting || !passing || !dribbling || !defending || !physical) {
                alert("Please fill in all fields.");
                return;
            }

        }

   
        // alert("Player added successfully!");



        form.reset();

        toggleGoalkeeperFields();
    });
});





// var lwcad = document.getElementById("lwcard"); // Parent
// var test = document.getElementById("test_img"); // Child
// var test_name = document.getElementById("test_name"); // Child
// test=document.createElement("img");
// test.setAttribute("src", "https://www.w3schools.com/images/colorpicker2000.webp")
// test.setAttribute("hieght", "100px");
// test.setAttribute("width", "100px");
// lwcad.appendChild(test);

// let a = document.createElement("p");
// a.style.color = "red";
// a.innerText = formData.name.value;
// test_name.appendChild(a);







