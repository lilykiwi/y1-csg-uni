tempfile="./.temp"
echo "put -r ci435/" > ./.temp
sftp -i ~/.ssh/id_rsa -o User=kmjw10 -b "./.temp" kmjw10.brighton.domains
