# express-mongodb

https://medium.com/featurepreneur/connect-mongodb-database-to-express-server-step-by-step-53e548bb4967

https://stackoverflow.com/questions/71953666/remote-permission-to-repository-denied-url-returned-error-403

error:
remote: Permission to RoneeRayhan/express-mongodb.git denied to ronee-muhammad-rayhan. fatal: unable to access 'https://github.com/RoneeRayhan/express-mongodb.git/': The requested URL returned error: 403
This worked for me

When creating your Personal Access Token, ✅Check some of the checkboxes e.g

✅repo
✅workflow
✅user
✅write:discussion
✅admin:enterprise
✅admin:gpg_key
This worked for me

When creating your Personal Access Token, ✅Check some of the checkboxes e.g

✅repo
✅workflow
✅user
✅write:discussion
✅admin:enterprise
✅admin:gpg_key
Well this worked for me Try this
8

first you need to generate new token

My account - Setting - Developer Setting - Personal Access Token - Generate New Token

after you generate token

git remote set-url origin https://<token>@github.com/<username>/<repo>

git remote set-url origin https://ghp_6HDVodtsFy......GB1BTFp2EZ30YgoW0@github.com/RoneeRayhan/express-mongodb.git
