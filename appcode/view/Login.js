Ext.define('Loginapp.view.Login', {
    extend: 'Ext.form.Panel',
    alias: "widget.loginview",
    //xtype: 'login',
    requires: [
        'Ext.TitleBar',
        'Ext.Toolbar',
        'Ext.form.FieldSet',
        'Ext.form.Password',
        'Ext.Label',
        'Ext.util.DelayedTask'
    ],
    config: {
        styleHtmlContent: true,
        items: [
            {
                xtype: 'titlebar',
                cls: 'title',
                docked: 'top',
                title: 'Loginapp',
                items: [
                    {
                        cls: 'back',
                        itemId: 'backButton',
                        hidden: false,
                        ui: 'back',
                        action: 'back',
                        align: 'left',
                        text: 'back'
                    }
                ]
            },
            {
                xtype: 'label',
                html: 'Login failed! Unrecognize user ID. Please try again!',
                itemId: 'signInFailedLabel',
                hidden: true,
                hideAnimation: 'fadeOut',
                showAnimation: 'fadeIn',
                style: 'color:#990000;margin:5px 0px;'
            },
            {
            	xtype: 'fieldset',
            	title: 'Loginapp: Login',
            	items: [
            		{
            			xtype: 'textfield',
            			placeHolder: 'Username',
            			itemId: 'userNameTextField',
            			name: 'userNameTextField',
            			required: true
            		},
            		{
            			xtype: 'passwordfield',
            			placeHolder: 'Password',
            			itemId: 'passwordTextField',
            			name: 'passwordTextField',
            			required: true
            		}
            	]
            },
            {
            	xtype: 'button',
            	itemId: 'logInButton',
            	ui: 'action',
            	padding: '10px',
            	text: 'Login'
            }
        ],
        listeners: [
        	{
        		delegate: '#logInButton',
        		event: 'tap',
        		fn: 'onLogInButtonTap'
        	},
            {
                delegate: '#backButton',
                event: 'tap',
                fn: 'onBackButtonTap'
            },
            {
                delegate: '#labelButton',
                event: 'tap',
                fn: 'onLabelButtonTap'
            }
        ]
    },
    onLogInButtonTap: function(){
    	var me = this,
	    	usernameField = me.down('#userNameTextField'),
	    	passwordField = me.down('#passwordTextField'),
	    	label = me.down('#signInFailedLabel'),
	    	username = usernameField.getValue(),
	    	password = passwordField.getValue();

    	label.hide();

    	var task = Ext.create('Ext.util.DelayedTask', function(){
    		label.setHtml('');
    		me.fireEvent('signInCommand', me, username, password);

    		usernameField.setValue('');
    		passwordField.setValue('');
    	});

    	task.delay(500);
    },
    onBackButtonTap: function(){
        this.fireEvent('backButtonCommand');
    }
    //This function here still don't work properly
    //but I replaced with an alert box instead of label.
    // showSignInFailedMessage: function(message){
    //     var label = this.down('#signInFailedLabel');
    //     label.setHtml(message);
    //     label.show();
    // }
});