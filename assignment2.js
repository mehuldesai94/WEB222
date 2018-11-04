/*********************************************************************************
*  WEB222 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: MehulKumar Desai    Student ID: 110288172    Date: 10/02/2018
*
********************************************************************************/ 


/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/

var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];




 /*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */

// Main object CustomrtDB.
var CustomerDB = {
    /*        *****************************************
                           Variables
              *****************************************
              Object Variable that store the data from allData object.
              All variable initialize with empty array.
    */
    customer: [],
    address: [],
    store: [],
    
    
    
    /*        *****************************************
                            User Fucntions
              *****************************************
    */
    
    /*  -------------
        insertData : This method take single object from allData object and store into correct array.
        -------------
    */
    insertData(inputData){
        for(var i = 0; i < inputData.length; i ++)
        {
            var obj = inputData[i];
    
            switch(obj.type) // insert object in correct array by checking 'type'
            {
                    case "customer": this.addCustomer(obj.data);
                                     break;
                    case "store": this.addStore(obj.data);
                                  break;
                    case "address": this.addAddress(obj.data);
                                    break;
            }      
        }
    },
    
    /*  -------------
        addCustomer : Recieve customer object and set add_date in each object add push into customer array.
        -------------
    */
    addCustomer(customerObj)
    {
        customerObj.add_date = new Date();
        this.customer.push(customerObj);
    },
    
    /*  -------------
        addStore : Insert store object into store object array.
        ------------- 
    */
    addStore(storeObj)
    {
        this.store.push(storeObj);
    },
    
    /*  -------------
        addAddress : Insert address into address object array.
        -------------
    */
    addAddress(addressObj)
    {
        this.address.push(addressObj);
    },
    
    /*  -------------
        outputCustomerById : search customer id into customer object array and display output as following.
        -------------
        
        Customer 26: Dave Bennett (dbennett@gmail.com)
        Home Address: 3945 John St. Ajax, ON. L7M4T9
        Joined: Wed Feb 01 2017 22:13:22 GMT-0500 (EST)
    */
    outputCustomerById(customer_id)
    {
        var customerAddress;
        var customerInfo;
        var outputStr = "";
        for (var i = 0; i < this.customer.length; i++)
        {     
            if(this.customer[i].customer_id == customer_id)
            {
                customerInfo = this.customer[i]; 
                customerAddress = this.getAddressById(customerInfo.address_id);
                break;
            }
        }
        outputStr = "Customer " + customerInfo.customer_id + ": " + customerInfo.first_name + " " + customerInfo.last_name + " (" + customerInfo.email + ")\n";
        outputStr += "Home Address:" + customerAddress.address + " " + customerAddress.city + ", " + customerAddress.province + ". " + customerAddress.postal_code + "\n";
        outputStr += "Joined: " + customerInfo.add_date;
        return outputStr;
    },
    
    /*  -------------
        outputAllCustomers : Display all customers in the same format as above and with display header('All customer').
        -------------
    */
    outputAllCustomers()
    {
        console.log("All Customers\n\n");
        for (var i = 0; i < this.customer.length; i++)
        {
            var customerId = this.customer[i].customer_id;;
            console.log(this.outputCustomerById(customerId));
            console.log("\n");
        }
    },
    
    /*  -------------
        outputCustomersByStore : This method take store_id as input and display all customer that have same store_id in following way.
        -------------
        
        Customers in Store: Scotiabank - Main Branch

        Customer 26: Dave Bennett (dbennett@gmail.com) 
        Home Address: 3945 John St. Ajax, ON. L7M4T9 
        Joined: Wed Feb 01 2017 22:29:06 GMT-0500 (EST)
        
        ------ cont.
    */
    outputCustomersByStore(store_id)
    {
        var storeInfo = this.getStoreById(store_id);
        console.log("Customers in Store:" + storeInfo.name + "\n\n");
        
        for(var i = 0; i < this.customer.length; i++)
        {
            if(this.customer[i].store_id == store_id)
            {
                var customerId = this.customer[i].customer_id;
                console.log(this.outputCustomerById(customerId));        
                console.log("\n");
            }
        }
    },
    
    /*  -------------
        removeCustomerById : This method remore customer from customer object array. also remove address if no other customer using same address.
        -------------
    */
    removeCustomerById(customer_id)
    {
        for (var i = 0; i < this.customer.length; i++)
        {
            if(this.customer[i].customer_id == customer_id)
            {
                var customerInfo = this.customer[i];
                this.customer.splice(i, 1);
                this.removeAddressById(customerInfo.address_id);
                break;
            }
        }
    },
    
    /*  -------------
        getAddressById : Take address_id as input and search in address array and return address that has same address_id.
        -------------
    */
    getAddressById(address_id)
    {
        var customerAddress;
        for (var i = 0; i < this.address.length; i++)
        {
             if(this.address[i].address_id == address_id)
             {
                 customerAddress = this.address[i];
                 break;
             }
        }  
        return customerAddress;
    },
   
    
    /*  -------------
        outputAllAddresses : Take signle address from address object array and disply addresses in the following format with header.
        -------------
        
        All Addresses
        Address 1023: 2895 Yonge St. Toronto, ON. L4C02G
        ----- etc
    */
    outputAllAddresses()
    {
        console.log("All Addresses\n\n");
        for(var i = 0; i < this.address.length; i++)
        {
            var address = this.address[i];
            var outputStr = "";
            
            outputStr = "Address " + address.address_id + ": " + address.address + " " + address.city +", " + address.province + "." + address.postal_code + "\n\n";
            console.log(outputStr);
        }
    },
    
    /*  -------------
        removeAddressById : remove specified address from address object array if no other customer has same address.
        -------------
    */
    removeAddressById(address_id)
    {
        var isAddressFound = false;
        var i = 0;
        for(i = 0; i < this.customer.length; i++)
        {
            if(this.customer[i].address_id == address_id)
            {
                isAddressFound = true;
                break;
            }
        }
        if(!isAddressFound)
        {
            this.address.splice(i + 1, 1);
        }
    },
    
    /*  -------------
        getStoreById : return store data from store object array that pass as fucntion parameter.
        -------------
    */
    getStoreById(store_id) 
    {
        var storeInfo;
        for(var i = 0; i < this.store.length; i++)
        {
            if(this.store[i].store_id == store_id)
            {
                storeInfo = this.store[i];
                break;
            }
        }
        return storeInfo;
    },
    
    
    /*  -------------
        outputAllStores : Disply all sotre from store object array in following way.
        -------------
    
        All Stores
        Store 297: Scotiabank - Main Branch  
        Location: 2895 Yonge St. Toronto, ON. L4C02G
        ---- etc
    */
    outputAllStores()
    {
        console.log("All Stores\n\n");
        for(var i = 0; i < this.store.length; i++)
        {
            var outputStr = "";
            var storeInfo = this.store[i];
            var storeAddress = this.getAddressById(storeInfo.address_id);
            outputStr = "Store " + storeInfo.store_id + ": " + storeInfo.name + "\n";
            outputStr += "Location: " + storeAddress.address + " " + storeAddress.city + ", " + storeAddress.province + "." + storeAddress.postal_code + "\n\n";
            console.log(outputStr);
        }
    }
};

/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/


// Insert all Data into the Database

CustomerDB.insertData(allData);

// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");


// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 


// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 
