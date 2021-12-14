import RingCentral from '@rc-ex/core';
import AuthorizeUriExtension from '@rc-ex/authorize-uri';

const redirectUri = window.location.origin + window.location.pathname;
const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});
const authorizeUriExtension = new AuthorizeUriExtension();
rc.installExtension(authorizeUriExtension);
const urlSearchParams = new URLSearchParams(
  new URL(window.location.href).search
);

const code = urlSearchParams.get('code');
if (code === null) {
  // login
  const loginUrl = authorizeUriExtension.buildUri({redirect_uri: redirectUri});
  const link = document.createElement('a');
  link.href = loginUrl;
  link.innerText = 'Login';
  document.body.appendChild(link);
} else {
  // exchange code for token
  (async () => {
    const tokenInfo = await rc.authorize({code, redirect_uri: redirectUri});
    console.log(tokenInfo.access_token);
    const p = document.createElement('p');
    p.innerHTML = `You have logged in successfully!<br/><br/><a href="${redirectUri}">Test again</a>`;
    document.body.appendChild(p);
  })();
}
