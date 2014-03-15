Ext.define('Loginapp.view.Menu', {
    extend: 'Ext.form.Panel',
    alias: "widget.menuview",
    //xtype: 'menu',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        styleHtmlContent: true,
        items: [
            {
                xtype: 'titlebar',
                cls: 'title',
                docked: 'top',
                title: 'Loginapp: Menu',
                items: [
                    {
                        xtype: 'button',
                        text: 'Logout',
                        itemId: 'logOutButton',
                        align: 'right'
                    }
                ]
            },
            {
                html: "You logged in successfully!"
            },
            {
                xtype: 'button',
                itemId: 'menuButton',
                ui: 'action',
                margin: '50px',
                padding: '10px',
                text: 'Click me!'
            }
        ],
        listeners: [
            {
                delegate: '#menuButton',
                event: 'tap',
                fn: 'onMenuButtonTap'
            },
            {
                delegate: '#logOutButton',
                event: 'tap',
                fn: 'onLogOutButtonTap'
            }
        ]
    },
    onLogOutButtonTap: function(){
        this.fireEvent('signOutCommand');
    },
    onMenuButtonTap: function(){
        this.fireEvent('menuButtonCommand');
    }
});