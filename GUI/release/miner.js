var $jscomp$destructuring$var0=require("child_process"),spawn=$jscomp$destructuring$var0.spawn,miner,state=!0,clicked=function(a){state?startMining():stopMining();state=!state;a.src=state?"./common/play.png":"./common/pause.png"},startMining=function(){var a=require("./common/options.json");console.log("Starting");miner=spawn("./common/CharityCoin"+(a.cpu?"C":"")+(a.gpu?"G":"")+"PU.bat");miner.stdout.on("data",function(a){return console.log("stdout: "+a)});miner.stderr.on("data",function(a){return console.err("stderr: "+
a)});miner.on("close",function(){console.log("closed")})},stopMining=function(){miner.kill();console.log("Stopping")};