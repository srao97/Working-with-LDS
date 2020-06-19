import { LightningElement,track } from 'lwc';
import getAllContacts from '@salesforce/apex/conManager.getCont';
export default class FetchRecordsViaApex extends LightningElement {
    @track numberOfRecords;
    @track contacts;

    get responsiveReceived(){
        if(this.contacts)
        {
            return true;
        }
            return false;
    }
    numberOfContactChangeHandler(event){
        this.numberOfRecords=event.target.value;
    }
    getContacts(){
    getAllContacts({numberOfRecords:this.numberOfRecords}).then (response=>{
        this.contacts=response;
    }).catch(error=>{
        console.log('Error in retrieving contact records',error.body.message);
    });
    }
}