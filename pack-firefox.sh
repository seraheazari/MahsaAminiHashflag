mkdir firefox
cp manifest.firefox.json firefox/manifest.json
cp -R images js firefox
cd firefox
zip -r ../mahsa-amini-hashflag-firefox.zip *
cd ..
rm -r firefox
