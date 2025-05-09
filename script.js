document.getElementById('serviceForm').addEventListener('submit',function(e){
    e.preventDefault();

    const cusNIC = document.getElementById('cus_nic').value;
    const vehNo = document.getElementById('veh_no').value;
    const vehName = document.getElementById('vehi_name').value;
    const date = document.getElementById('date').value;
    const cost = document.getElementById('cost').value;

    const cusDetails = {cusNIC,vehNo,vehName,date,cost};

    localStorage.setItem(cusNIC, JSON.stringify(cusDetails));
    alert("Customer Details Successfull !!");
    document.getElementById('serviceForm').reset();
});


//search customer

function searchCustomer(){
    const searchId = document.getElementById('serchId').value;
    const customerData = localStorage.getItem(searchId);

    if(customerData){
        const cusDetails = JSON.parse(customerData);

        document.getElementById('result').innerHTML = `             
        
        <p><strong>Vehical Number : </strong>${cusDetails.vehNo}</p>
        <p><strong>Vehical Name : </strong>${cusDetails.vehName}</p>
        <p><strong>Service Cost : </strong>${cusDetails.cost}</p>`;

        document.getElementById('costCalculate').style.display = 'block';
    }else{

        document.getElementById('result').innerHTML = `
        <p class="text-danger">Customer Details Not Found !!</p>
        `;

        document.getElementById('costCalculate').style.display = 'none';
    }

   

}



function fullCost() {
    const searchId = document.getElementById('serchId').value;
    const customerData = localStorage.getItem(searchId);

    if (customerData) {
        const customer = JSON.parse(customerData);
        const extraCost = parseFloat(document.getElementById('full_cost').value);

        if (!isNaN(customer.cost) && !isNaN(extraCost)) {
            const totalCost = parseFloat(customer.cost) + extraCost;

            document.getElementById('costCalculate').innerHTML += `
                <hr>
                <h4><strong>Total Cost : Rs.${totalCost.toFixed(2)}</strong></h4>

                <alert>  Happy Customer  </alert>
                <alert>  Come Back </alert>
            `;
        }
        
    }
}

// //full cost calculate
// function fullCost(){
//     const searchId = document.getElementById('serchId').value;
//     const customerData = localStorage.getItem(searchId);

//     if(customerData){
//         const customer  = JSON.parse(customerData);

//         const extraCost = parseFloat(document.getElementById('extr').value);

//         const fullCost = parseFloat(customer.cost)* extraCost;

//         document.getElementById('full_cost').innerHTML += `
//         <hr>
//         <h4><strong>Full Cost : Rs.${fullCost}</strong></h4>
//         `;
//     }

// }



