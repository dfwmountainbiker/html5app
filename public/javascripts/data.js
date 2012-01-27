Ext.regModel('Contact', {
    fields: ['firstName', 'lastName']
});

ListDemo.ListStore = new Ext.data.Store({
    model: 'Contact',
    sorters: 'firstName',
    getGroupString : function(record) {
        return record.get('firstName')[0];
    },
    data: [
        { firstName: "Zen",      lastName: "Sushi" },
        { firstName: "Wings",     lastName: "To Go" },
        { firstName: "Fiona",       lastName: "Volpe" },
        { firstName: "White Rock",       lastName: "Steak House" },
        { firstName: "Vickery",       lastName: "Park" },
        { firstName: "Via",        lastName: "Real" },
        { firstName: "Twisted",       lastName: "Root" },
        { firstName: "Trader",        lastName: "Vics" },
        { firstName: "Old",     lastName: "Warsaw" },
        { firstName: "Thai",       lastName: "Flash" },
        { firstName: "Taqueria",       lastName: "Cholula" },
        { firstName: "Spargos",    lastName: "Pizza" },
        { firstName: "Arby",      lastName: "Steakhouse" },
        { firstName: "Black Rock",       lastName: "Steakhouse" },
        { firstName: "Chik",  lastName: "Fil-A" }
    ]
});

