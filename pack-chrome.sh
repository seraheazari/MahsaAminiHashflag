mkdir chrome
cp manifest.json chrome/manifest.json
cp -R images js chrome
cd chrome
zip -r ../mahsa-amini-hashflag-chrome.zip *
cd ..
rm -r chrome
