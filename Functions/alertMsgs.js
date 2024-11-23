

const alertsMsg = {
    'empty-msg': {type: 'warning', title: 'Empty Propt', dec: 'Please provide me some text.'},
    'token-not-found': {type: 'error', title: 'Token not found'},
    'internal-server-error': {type: 'error', title: 'Internal Server Error'},
    'no-internet': {type: 'error', title: 'No Internet Connection !!!'},
    'on-online': {type: 'success', title: 'Connection Come Back'},
    'on-offline': {type: 'error', title: 'Connection Losed !!!'},
    'username-not-available': {type: 'error', title: 'Username Not Available', dec: 'Username enter by you is allready exist in database.'},
    'signup-done': {type: 'success', title: 'Sign Up Successfull', dec: 'your accconte will be successfuly crated.'},
    'invalid-info': {type: 'error', title: 'Invalid info', dec: 'Please enter valid infomation.'},
    'login-done': {type: 'success', title: 'Login Done', dec: 'Welcome back on Notes with Bot.'},
    'login-fail': {type: 'error', title: 'Login Fail', dec: 'Login fail due to invalid username or password.'},
    'logout-done': {type: 'info', title: 'Log-Out', dec: 'You are logout successfuly.'},
    'note-create-done': {type: 'success', title: 'Note Save', dec: 'New Note was create successfully.'},
    'info-send': {type: 'info', title: 'Sending ...', dec: 'You Request will be send, wait for response.'},
    'invalid-method-call': {type: 'error', title: 'Invalid Method', dec: 'You hit api in wrong way, Plese change you method.'},
    'fail-to-save-chat': {type: 'error', title: 'Fail to Save', dec: 'Due to Internal server error chat do not save !!!' }
}


export default (msgName) => alertsMsg[msgName];