public with sharing class conManager {
    
    @AuraEnabled(Cacheable=true)
    public static List<Contact> getCont(Integer numberOfRecords){
        return[select id,LastName,Phone from Contact Limit:numberOfRecords];
    }
}
