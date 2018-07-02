echo -n "STARTING supreme\n"
cd ~/code/supreme
git pull origin
sleep 5
code .
npm start


#------------ όταν θελεις να κατεβάσεις από το github και να κάνεις overwrite το local
#git reset --hard
#git pull origin master
