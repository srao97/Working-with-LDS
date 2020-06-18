public with sharing class ContactManager {
    @AuraEnabled(Cacheable=true)
    public static List<Contact> getContact()
    {
        return[select id,LastName,Phone from Contact Limit 10];    
    }
}
