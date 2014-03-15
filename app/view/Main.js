Ext.define('Loginapp.view.Main', {
    extend: 'Ext.form.Panel',
    alias: "widget.mainview",
    //xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Toolbar'
    ],
    config: {
        styleHtmlContent: true,
        items: [
            {
                xtype: 'titlebar',
                cls: 'title',
                docked: 'top',
                title: 'Loginapp'
            },
            {
                html: [
                    "This application is solely created to demonstrate my understanding of using <strong>Sencha Touch 2 ",
                    "Framework</strong> to built a robust and high performance mobile application for <strong>Wavelet Solutions Sdn. Bhd.</strong>."
                ].join("")
            },
            {
                xtype: 'button',
                itemId: 'nextPageButton',
                ui: 'action',
                margin: '50px',
                padding: '10px',
                text: 'Continue to login'
            },
            {
                styleHtmlContent: true,
                xtype: 'toolbar',
                cls: 'footer',
                docked: 'bottom',
                ui: 'light',
                html: '<span>Created by misterpy</span>'
            }
        ],
        listeners: [
            {
                delegate: '#nextPageButton',
                event: 'tap',
                fn: 'onNextPageButtonTap'
            }
        ]
    },
    onNextPageButtonTap: function(){
        this.fireEvent('nextPageCommand');
    }
});