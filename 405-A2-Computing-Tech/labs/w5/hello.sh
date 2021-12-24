INPUT=hello

while [ "$INPUT" != "end" ]
do
	echo "Type something in (end to quit)"
	read INPUT
	echo "You typed $INPUT"
done

