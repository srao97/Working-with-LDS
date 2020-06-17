import { LightningElement,track,wire } from 'lwc';
import{createRecord,getRecord} from "lightning/uiRecordApi";
const fieldArray=['Contact.LastName','Contact.Email','Contact.Phone'];

export default class CreateContactLDS2 extends LightningElement {
@track contactName;
@track contactEmail;
@track contactPhone;

@track recordId;
@wire(getRecord,{recordId:'$recordId',fields:fieldArray}) contactRecord;

contactNameChangeHandler(event){
    this.contactName=event.target.value;
}
contactEmailChangeHandler(event){
    this.contactEmail=event.target.value;
}
contactPhoneChangeHandler(event){
    this.contactPhone=event.target.value;
}
createContact(){
    const fields={'LastName':this.contactName,'Email':this.contactEmail,'Phone':this.contactPhone};
    const recordInput={apiName:'Contact',fields};
    createRecord(recordInput).then (response=>{
        console.log('contact has been created:',response.id);
        this.recordId=response.id;
    }).catch(error=>{
        console.log('error in creating a record',error.body.message);
    });
}
get retContactName(){
    if(this.contactRecord.data){
        return this.contactRecord.data.fields.LastName.value;
    }
}
get retContactEmail(){
    if(this.contactRecord.data){
        return this.contactRecord.data.fields.Email.value;
    }
}
get retContactPhone(){
    if(this.contactRecord.data){
        return this.contactRecord.data.fields.Phone.value;
    }
}
}
