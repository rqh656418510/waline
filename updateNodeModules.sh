echo "===> clean node modules"

rm -rf ./package-lock.json

find . -type d -iname "node_modules" | xargs rm -rf

echo "===> install node modules"

npm install --unsafe-perm=true --allow-root

echo "===> test local build"

npm run admin:build

npm run client:build
