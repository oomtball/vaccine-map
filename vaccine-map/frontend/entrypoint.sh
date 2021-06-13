#!/bin/sh

if [ ! -e ".ran" ]; then
	sed -i "s/localhost:3002/$BACKEND_HOST:3002/g" `grep -rl localhost:3002 .`
	touch .ran
fi

npm start
