import { LightningElement,track } from 'lwc';
import{createRecord} from "lightning/uiRecordApi";
export default class CreateContactLDS extends LightningElement {
    @track contactName;
    @track contactEmail;
    @track contactPhone;

    contactNameChangeHandler(event){
        this.contactName=event.target.value;
    }
    contactEmailChangeHandler(event){
        this.contactEmail=event.target.value;
    }
    contactPhoneChangeHander(event){
        this.contactPhone=event.target.value;
    }
    createContact(){
        const fields={'LastName':this.contactName,'Email':this.contactEmail,'Phone':this.Phone};
        const recordInput={apiName:'Contact',fields};
        createRecord(recordInput).then(response=>{
            console.log('Contact has been Created',response.id);
        }).catch(error=>{
            console.log('Error in creating record',error.body.message);
        });
    }
}