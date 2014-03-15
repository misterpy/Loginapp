Ext.define('Loginapp.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainView: 'mainview',
            loginView: 'loginview',
            menuView: 'menuview'
        },
        control: {
            mainView: {
                'nextPageCommand' : 'onNextPageCommand'
            },
            loginView: {
                'signInCommand' : 'onSignInCommand',
                'backButtonCommand' : 'onBackbuttonCommand'
            },
            menuView: {
                'signOutCommand' : 'onSignOutCommand'
            }
        }
    },
    getSlideLeftTransition: function(){
        return { type: 'slide', direction: 'left'};
    },
    getSlideRightTransition: function(){
        return { type: 'slide', direction: 'right'};
    },
    getSlideUpTransition: function(){
        return { type: 'slide', direction: 'up'};
    },
    getSlideDownTransition: function(){
        return { type: 'slide', direction: 'down'};
    },
    onNextPageCommand: function(){
        Ext.Viewport.animateActiveItem({xtype: 'loginview'}, this.getSlideUpTransition());
    },
    onBackbuttonCommand: function(){
        Ext.Viewport.animateActiveItem({xtype: 'mainview'}, this.getSlideDownTransition());
    },
    onSignInCommand: function(view, username, password) {
        console.log('Username: ' + username + '\n' + 'Password: ' + password);

        loginView = this.getLoginView();

        if (username.length === 0 || password.length === 0){
            Ext.Msg.alert('Enter something!');
            console.log('No user input.');
            return;
        }

        loginView.setMasked({
            xtype: 'loadmask',
            message: 'Signing in...'
        });

        //This is the logic of authenticating the user hardcoded
        //in the controller.

        if(username === 'user123' && password === 'testing'){
            this.signInSuccess();
        }
        else{
            this.signInFailure('Failed. Haha. Try again!')
        }
    },
    signInSuccess: function(){
        console.log('Signed in.');
        var loginView = this.getLoginView();
        menuView = this.getMenuView();
        loginView.setMasked(false);

        Ext.Viewport.animateActiveItem(menuView, this.getSlideLeftTransition());
    },
    signInFailure: function(message){

        Ext.Msg.alert(message);

        //I stil cant get the following function to work.
        //Therefore I implemented an alert box for failed login
        // loginView = this.getLoginView();
        // loginView.showSignInFailedMessage(message);
        // loginView.setMasked(false);
        // console.log(message);
    },
    onSignOutCommand: function(){
        var me = this,
            menuView = me.getMenuView();

        menuView.setMasked({
            xtype: 'loadmask',
            message: 'Signing out...'
        });

        menuView.setMasked(false);
        Ext.Viewport.animateActiveItem( {xtype: 'loginview'}, this.getSlideRightTransition());
    }
});