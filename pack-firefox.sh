mkdir firefox
cp manifest.firefox.json firefox/manifest.json
cp -R images js firefox /
cd firefox
zip mahsa-amini-hashflag-firefox.zip *
cd ..
cp firefox/mahsa-amini-hashflag-firefox.zip .
rm -r firefox
