Ext.define('Loginapp.controller.Menu', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			menuView: 'menuview'
		},
		control: {
			menuView: {
                'menuButtonCommand' : 'onMenuButtonCommand'
			}
		}
	},
	onMenuButtonCommand: function(){
        Ext.Msg.alert('You hit me!');
    }
});