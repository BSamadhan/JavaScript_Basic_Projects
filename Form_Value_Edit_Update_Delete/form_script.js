// function AddData(e){
//     e.preventDefault();
//     var fname = document.getElementById("fname").value;
//     var lname = document.getElementById("lname").value;
//     var email = document.getElementById("email").value;
//     var mobile = document.getElementById("mobile").value;
//     var address = document.getElementById("address").value;
//     var edit = `<a href="#">Edit</a>`;
//     var scount = 0;
//     //alert(edit)
    
//     var tbody = document.getElementById("tbody");
//     //console.log(table);
//     var row = tbody.insertRow(0);
//     var cell0 = row.insertCell(0);
//     var cell1 = row.insertCell(1)
//     var cell2 = row.insertCell(2)
//     var cell3 = row.insertCell(3)
//     var cell4 = row.insertCell(4)
//     var cell5 = row.insertCell(5)

//     cell0.innerHTML = fname;
//     cell1.innerHTML = lname;
//     cell2.innerHTML = email;
//     cell3.innerHTML = mobile;
//     cell4.innerHTML = address;
//     cell5.innerHTML = edit;
 
//     document.getElementById("myForm").reset();;    
// }*


let btnadd = document.querySelector('#btnadd');
let tbody = document.querySelector("tbody");

// Add table data
btnadd.addEventListener('click', AddData)
function AddData(e){
    e.preventDefault();
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var address = document.getElementById("address").value;

    let template = `<tr>
    <td></td>
    <td id='fname_td'>${fname}</td>
    <td id='lname_td'>${lname}</td>
    <td id='email_td'>${email}</td>
    <td id='mobile_td'>${mobile}</td>
    <td id='address_td'>${address}</td>
    <td>
    <a href="#" onclick="edit_row();">Edit</a>
    <a href="#" onclick="delete_row();">Delete</a></td>
    </tr>`;

    tbody.innerHTML += template;
    document.getElementById("myForm").reset();
}

// Edit table data
function edit_row(){
    document.getElementById("editform").style.display="block";
    document.getElementById("myForm").style.display="none";
    
    var table = document.getElementById("table_data");
    var rows = table.getElementsByTagName('tr');

    for ( var i = 1; i < rows.length; i++) {

        rows[i].i = i;
        rows[i].onclick = function() {

            var fname = table.rows[this.i].cells[1].innerHTML;                
            var lname = table.rows[this.i].cells[2].innerHTML;
            var email = table.rows[this.i].cells[3].innerHTML;
            var mobile = table.rows[this.i].cells[4].innerHTML;
            var address = table.rows[this.i].cells[5].innerHTML;

            document.getElementById('E_fname').value = fname;
            document.getElementById('E_lname').value = lname;
            document.getElementById('E_email').value = email;
            document.getElementById('E_mobile').value = mobile;
            document.getElementById('E_address').value = address; 
        // alert(`${fname} ${lname} ${email} ${mobile} ${address}`);
        };
    }
}

// Save table data
function save_data(no){
   // var tbody = document.querySelector("tbody");
    var fname = document.getElementById("E_fname").value;
    var lname = document.getElementById("E_lname").value;
    var email = document.getElementById("E_email").value;
    var mobile = document.getElementById("E_mobile").value;
    var address = document.getElementById("E_address").value;

    document.getElementById("fname_td").innerHTML= fname;
    document.getElementById("lname_td").innerHTML= lname;
    document.getElementById("email_td").innerHTML= email;
    document.getElementById("mobile_td").innerHTML= mobile;
    document.getElementById("address_td").innerHTML= address;
    
  
}

// Delete table rows
function delete_row(){
    document.getElementById('tbody').deleteRow(0);
}