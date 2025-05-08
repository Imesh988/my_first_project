document.getElementById('serviceForm').addEventListener('submit',function(e){
    e.preventDefault();

    const cusNIC = document.getElementById('cus_nic');
    const vehNo = document.getElementById('veh_no');
    const vehName = document.getElementById('vehi_name');
    const date = document.getElementById('date');
    const cost = document.getElementById('cost');

    const cusDetails = {cusNIC,vehNo,vehName,date,cost};

    localStorage.setItem(cusNIC, JSON.stringify(cusDetails));
    alert("customer details successfull !!");
    document.getElementById('serviceForm').reset();
});


//search customer

function searchCustomer(){
    const searchId = document.getElementById('serchId').value;
    const customerData = localStorage.getItem(searchId);

    if(customerData){
        const cusDetails = JSON.parse(customerData);

        
    }
}