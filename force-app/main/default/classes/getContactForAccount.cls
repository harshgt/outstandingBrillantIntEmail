public with sharing class getContactForAccount {
    
    @AuraEnabled(Cacheable = true)
    public static List<Contact> getContactForAccount(Id recordIds) {
        return [Select Id,AccountId from Contact where AccountId =: recordIds  ] ; 

    }
}