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
        <p><strong>Customer NIC : </strong>${cusDetails.cusNIC}</p>
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

//full cost calculate
function fullCost(){
    const searchId = document.getElementById('serchId').value;
    const customerData = localStorage.setItem(searchId);

    if(customerData){
        const customer  = JSON.parse(customerData);

        const extraCost = parseFloat(document.getElementById('full_cost').value);

        const fullCost = parseFloat(cusDetails.cost)* extraCost;

        document.getElementById('full_cost').innerHTML = `
        <hr>
        <h4><strong>Full Cost : Rs.${fullCost}</strong></h4>
        `;
    }

}