const DeathByCaptcha = require('./deathbycaptcha');

(async function() {
    let dbc = new DeathByCaptcha('', '');
    let sitekey = "";
    let siteurl = "";

    const token = JSON.stringify({
        'googlekey' : sitekey,
        'pageurl' : siteurl
    });

    // For getting balance
    const balance = await dbc.getProfile();
    console.log(`Your balance is ${balance.msg.balance}`);

    try {
        const decode = await dbc.decode({extra: {
            type : 4,
            token_params : token
        }});
        const captchaText = decode.msg;
        console.log(captchaText);
    } catch(err) {
        console.log(`${err}`)
    }
})();