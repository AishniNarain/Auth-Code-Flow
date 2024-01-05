function SignIn(){
    let oauth2endpoint = "https://accounts.google.com/o/oauth2/v2/auth"

    let form = document.createElement('form')
    form.setAttribute('method','GET')
    form.setAttribute('action',oauth2endpoint)

    let params = {
        "client_id":"641484304320-smaug2h89g46rlpdl3a545201gifn4kr.apps.googleusercontent.com",
        "redirect_uri":"http://localhost:8080/profile.html",
        "response_type":"token",
        "scope": "https://www.googleapis.com/auth/userinfo.profile",
        "include_granted_scopes":"true",
        "state":'pass-through-value'
    }

    for(var p in params){
        let input = document.createElement('input')
        input.setAttribute('type','hidden')
        input.setAttribute('name',p)
        input.setAttribute('value',params[p])
        form.appendChild(input)

        document.body.appendChild(form)
        form.submit()
    }
}