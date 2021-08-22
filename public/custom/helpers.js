function openWebPage(address){window.open(address,'_blank')}
function copy(elementId){var copy_text=document.getElementById(elementId)
var range=document.createRange()
range.selectNode(copy_text)
window.getSelection().addRange(range)
try{var successful=document.execCommand('copy')
var msg=successful?'successful':'unsuccessful'}catch(err){}
clearSelection()}
function waitForMe(milisec){return new Promise((resolve)=>{setTimeout(()=>{resolve('')},milisec)})}
const randomizer=async(listOfThings)=>{indexOfRandomItem=Math.floor(Math.random()*listOfThings.length)
return listOfThings[indexOfRandomItem]}
function numberWithCommas(x){return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}
const applyDecimals=async(number,decimals)=>{number=number/Math.pow(10,decimals)
return number}
function getFuncName(){return getFuncName.caller.name}
const getAddressURL=async(address)=>{switch(_chainId){case 42:chainDataURL=`https://kovan.etherscan.io/address/`+address
window.open(chainDataURL,'_blank')
return false
case 1:chainDataURL=`https://etherscan.io/address/`+address
window.open(chainDataURL,'_blank')
return false
case 56:chainDataURL=`https://bscscan.com/address/`+address
window.open(chainDataURL,'_blank')
return false
default:break}
addressURL='https://bscscan.com/address/'+address
return addressURL}
function openAddress(address){switch(_chainId){case 42:chainDataURL=`https://kovan.etherscan.io/address/`+address
window.open(chainDataURL,'_blank')
return false
case 1:chainDataURL=`https://etherscan.io/address/`+address
window.open(chainDataURL,'_blank')
return false
case 56:chainDataURL=`https://bscscan.com/address/`+address
window.open(chainDataURL,'_blank')
return false
default:break}}
function openTransaction(transaction){switch(_chainId){case 42:chainDataURL=`https://kovan.etherscan.io/tx/`+transaction
window.open(chainDataURL,'_blank')
return false
case 1:chainDataURL=`https://etherscan.io/tx/`+transaction
window.open(chainDataURL,'_blank')
return false
case 56:chainDataURL=`https://bscscan.com/tx/`+transaction
window.open(chainDataURL,'_blank')
return false
default:break}}
var APIkeyBSC='AQ5HRJEBSDK3ZXQA7YH1YC14CGHZKVXWY3'
var checkABIgetABI=async(address)=>{console.log(address+' '+getFuncName())
listPosition=listAddress.indexOf(address)
if(listPosition==-1){console.log(' ')
console.log('downloading ABI for: '+address)
await waitForMe(waitForMeDelay)
let abi=await axios.get('https://api.bscscan.com/api?module=contract&action=getabi&address='+address+'&Apikey='+APIkeyBSC)
abi=abi.data.result
return JSON.parse(abi)}else{return listABI[listAddress.indexOf(address)]}}
const getABI=async(address)=>{await waitForMe(waitForMeDelay)
let abi=await axios.get('https://api.bscscan.com/api?module=contract&action=getabi&address='+address+'&Apikey='+APIkeyBSC)
abi=abi.data.result
return JSON.parse(abi)}
var getBNBprice=async()=>{bnbPrice=await axios.get('https://api.bscscan.com/api?module=stats&action=bnbprice&Apikey='+APIkeyBSC)
bnbPrice=await bnbPrice.data.result.ethusd
return JSON.parse(bnbPrice)}
var logTopic=[]
logTopic.swapAndLiquify='0x17bbfb9a6069321b6ded73bd96327c9e6b7212a5cd51ff219cd61370acafb561'
logTopic.sync='0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1'
logTopic.mint='0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f'
logTopic.swap='0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822'
var log
var latestBlock
var txNum
var txUrl
var getPastLogs=async(fromBlock,toBlock,address,topics)=>{let log=await eth.getPastLogs({fromBlock:fromBlock,toBlock:toBlock,address:address,topics:[topics]})
return log}
const getTxNum=async(numberOfPastBlocksToSearch,tokenAddress,logTopic)=>{latestBlock=await eth.getBlockNumber()
log=await getPastLogs(latestBlock-numberOfPastBlocksToSearch,latestBlock,tokenAddress,logTopic)
txNum=log[0].transactionHash
return txNum}
const getTxUrl=async(numberOfPastBlocksToSearch,tokenAddress,logTopic)=>{latestBlock=await eth.getBlockNumber()
log=await getPastLogs(latestBlock-numberOfPastBlocksToSearch,latestBlock,tokenAddress,logTopic)
txNum=log[0].transactionHash
txUrl='https://bscscan.com/tx/'+txNum
return txUrl}
const getTxHistory=async(address)=>{let txHistory=await axios.get('https://api.bscscan.com/api?module=account&action=tokentx&address='+address+'&startblock=0&endblock=100000000&sort=asc&apikey='+APIkeyBSC)
return txHistory}