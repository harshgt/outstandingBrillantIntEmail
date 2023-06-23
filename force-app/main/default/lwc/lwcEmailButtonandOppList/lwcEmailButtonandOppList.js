import { LightningElement, api, wire, track } from 'lwc';
import getOppo from '@salesforce/apex/getOpportunityForAccount.getOpportunityForAccount';
import getCont from '@salesforce/apex/getContactForAccount.getContactForAccount';


const COLUMNS = [
    { label: 'Opportunity Name', fieldName: 'Name' },

    { label: 'Stage Name', fieldName: 'StageName', type: 'picklist' },

    { label: 'Amount', fieldName: 'Amount', type: 'currency' },

    { label: 'Id', fieldName: 'Id', type: 'Id' },

    { label: 'Email' },
]



export default class LwcEmailButtonandOppList extends LightningElement {

    columns = COLUMNS;
    @api recordId;
    @track data1;
    @track data2;


    selectedIteam;
    selectedRows1 = [];



    @wire(getOppo, { recordId: '$recordId' })
    getOppoAcc({ data, error }) {
        if (data) {
            this.data1 = data;

            console.log('system errrorrrrr 404');
            console.log(data);

        }
        else if (error) {

        }
    }

    //retrive crelated contact
    @wire(getCont, { recordIds: '$recordId' })
    getContAcc({ data, error }) {
        if (data) {
            this.data2 = data;

        }
        else if (error) {

        }
    } 


    get OppFound() {
        if (this.data1) {
            console.log('system errrorrrrr data1');
            console.log(data1);
            return true;
        }
        return false;

    }


    handleClick(event) {
        var selectedRecords = this.template.querySelector("lightning-datatable").getSelectedRows();
        console.log(selectedRecords);


        console.log('data for the apex contact',data2);
        //this.lwcEmailButtonandOppList = !this.LwcEmail; 


    }




    
   





}
