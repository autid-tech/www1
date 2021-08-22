if(!navigator.userAgent.includes('Chrome')){$('#stats-container').hide()}
setTimeout(()=>{if(!navigator.userAgent.includes('Chrome')){$('#stats-container').hide()}},200)
setTimeout(()=>{if(!navigator.userAgent.includes('Chrome')){$('#stats-container').hide()}},600)
var options={keepAlive:true,withCredentials:false,timeout:20000,headers:[{name:'Access-Control-Allow-Origin',value:'*'}]}
var statsData={}
const web32=new Web3('https://bsc-dataseed1.binance.org:443',options)
const eth2=web32.eth
var user={}
var bnbPrice
var _chainId
var stats={}
stats.burn={}
stats.bnb={}
stats.usdt={}
stats.usdt.pair={}
stats.notSafeMoon={}
stats.notSafeMoon.pair={}
stats.notSafeMoon.pair.reserves={}
stats.burn.address='0x0000000000000000000000000000000000000001'
stats.bnb.address='0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
stats.usdt.address='0x55d398326f99059ff775485246999027b3197955'
stats.usdt.pair.address='0x20bCC3b8a0091dDac2d0BC30F68E6CBb97de59Cd'
stats.notSafeMoon.address='0x337e35Ed5B38D5C7Ec9F8d7cF78fe7F43d7DEC6F'
stats.notSafeMoon.pair.address='0x357f9cd8f2749A31119C3E32729965CA56f4cBd8'
stats.usdt.pair.abi=[{'inputs':[],'payable':false,'stateMutability':'nonpayable','type':'constructor'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'address','name':'owner','type':'address'},{'indexed':true,'internalType':'address','name':'spender','type':'address'},{'indexed':false,'internalType':'uint256','name':'value','type':'uint256'}],'name':'Approval','type':'event'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'address','name':'sender','type':'address'},{'indexed':false,'internalType':'uint256','name':'amount0','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'amount1','type':'uint256'},{'indexed':true,'internalType':'address','name':'to','type':'address'}],'name':'Burn','type':'event'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'address','name':'sender','type':'address'},{'indexed':false,'internalType':'uint256','name':'amount0','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'amount1','type':'uint256'}],'name':'Mint','type':'event'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'address','name':'sender','type':'address'},{'indexed':false,'internalType':'uint256','name':'amount0In','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'amount1In','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'amount0Out','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'amount1Out','type':'uint256'},{'indexed':true,'internalType':'address','name':'to','type':'address'}],'name':'Swap','type':'event'},{'anonymous':false,'inputs':[{'indexed':false,'internalType':'uint112','name':'reserve0','type':'uint112'},{'indexed':false,'internalType':'uint112','name':'reserve1','type':'uint112'}],'name':'Sync','type':'event'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'address','name':'from','type':'address'},{'indexed':true,'internalType':'address','name':'to','type':'address'},{'indexed':false,'internalType':'uint256','name':'value','type':'uint256'}],'name':'Transfer','type':'event'},{'constant':true,'inputs':[],'name':'DOMAIN_SEPARATOR','outputs':[{'internalType':'bytes32','name':'','type':'bytes32'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[],'name':'MINIMUM_LIQUIDITY','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[],'name':'PERMIT_TYPEHASH','outputs':[{'internalType':'bytes32','name':'','type':'bytes32'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[{'internalType':'address','name':'','type':'address'},{'internalType':'address','name':'','type':'address'}],'name':'allowance','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[{'internalType':'address','name':'spender','type':'address'},{'internalType':'uint256','name':'value','type':'uint256'}],'name':'approve','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':true,'inputs':[{'internalType':'address','name':'','type':'address'}],'name':'balanceOf','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[{'internalType':'address','name':'to','type':'address'}],'name':'burn','outputs':[{'internalType':'uint256','name':'amount0','type':'uint256'},{'internalType':'uint256','name':'amount1','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':true,'inputs':[],'name':'decimals','outputs':[{'internalType':'uint8','name':'','type':'uint8'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[],'name':'factory','outputs':[{'internalType':'address','name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[],'name':'getReserves','outputs':[{'internalType':'uint112','name':'_reserve0','type':'uint112'},{'internalType':'uint112','name':'_reserve1','type':'uint112'},{'internalType':'uint32','name':'_blockTimestampLast','type':'uint32'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[{'internalType':'address','name':'_token0','type':'address'},{'internalType':'address','name':'_token1','type':'address'}],'name':'initialize','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':true,'inputs':[],'name':'kLast','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[{'internalType':'address','name':'to','type':'address'}],'name':'mint','outputs':[{'internalType':'uint256','name':'liquidity','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':true,'inputs':[],'name':'name','outputs':[{'internalType':'string','name':'','type':'string'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[{'internalType':'address','name':'','type':'address'}],'name':'nonces','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[{'internalType':'address','name':'owner','type':'address'},{'internalType':'address','name':'spender','type':'address'},{'internalType':'uint256','name':'value','type':'uint256'},{'internalType':'uint256','name':'deadline','type':'uint256'},{'internalType':'uint8','name':'v','type':'uint8'},{'internalType':'bytes32','name':'r','type':'bytes32'},{'internalType':'bytes32','name':'s','type':'bytes32'}],'name':'permit','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':true,'inputs':[],'name':'price0CumulativeLast','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[],'name':'price1CumulativeLast','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[{'internalType':'address','name':'to','type':'address'}],'name':'skim','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':false,'inputs':[{'internalType':'uint256','name':'amount0Out','type':'uint256'},{'internalType':'uint256','name':'amount1Out','type':'uint256'},{'internalType':'address','name':'to','type':'address'},{'internalType':'bytes','name':'data','type':'bytes'}],'name':'swap','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':true,'inputs':[],'name':'symbol','outputs':[{'internalType':'string','name':'','type':'string'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[],'name':'sync','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':true,'inputs':[],'name':'token0','outputs':[{'internalType':'address','name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[],'name':'token1','outputs':[{'internalType':'address','name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[],'name':'totalSupply','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[{'internalType':'address','name':'to','type':'address'},{'internalType':'uint256','name':'value','type':'uint256'}],'name':'transfer','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':false,'inputs':[{'internalType':'address','name':'from','type':'address'},{'internalType':'address','name':'to','type':'address'},{'internalType':'uint256','name':'value','type':'uint256'}],'name':'transferFrom','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'nonpayable','type':'function'}]
stats.notSafeMoon.abi=[{'inputs':[],'stateMutability':'nonpayable','type':'constructor'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'address','name':'owner','type':'address'},{'indexed':true,'internalType':'address','name':'spender','type':'address'},{'indexed':false,'internalType':'uint256','name':'value','type':'uint256'}],'name':'Approval','type':'event'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'address','name':'previousOwner','type':'address'},{'indexed':true,'internalType':'address','name':'newOwner','type':'address'}],'name':'OwnershipTransferred','type':'event'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'address','name':'from','type':'address'},{'indexed':true,'internalType':'address','name':'to','type':'address'},{'indexed':false,'internalType':'uint256','name':'value','type':'uint256'}],'name':'Transfer','type':'event'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'address','name':'from','type':'address'},{'indexed':true,'internalType':'address','name':'burnAddress','type':'address'},{'indexed':false,'internalType':'uint256','name':'value','type':'uint256'}],'name':'TransferBurn','type':'event'},{'inputs':[],'name':'_burnFee','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[],'name':'_maxTxAmount','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[],'name':'_rewardFee','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':'address','name':'owner','type':'address'},{'internalType':'address','name':'spender','type':'address'}],'name':'allowance','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':'address','name':'spender','type':'address'},{'internalType':'uint256','name':'amount','type':'uint256'}],'name':'approve','outputs':[{'internalType':'bool','name':'','type':'bool'}],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':'address','name':'account','type':'address'}],'name':'balanceOf','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[],'name':'decimals','outputs':[{'internalType':'uint8','name':'','type':'uint8'}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':'address','name':'spender','type':'address'},{'internalType':'uint256','name':'subtractedValue','type':'uint256'}],'name':'decreaseAllowance','outputs':[{'internalType':'bool','name':'','type':'bool'}],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':'uint256','name':'tAmount','type':'uint256'}],'name':'deliver','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':'address','name':'account','type':'address'}],'name':'excludeFromFee','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':'address','name':'account','type':'address'}],'name':'excludeFromReward','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[],'name':'geUnlockTime','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':'address','name':'account','type':'address'}],'name':'includeInFee','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':'address','name':'account','type':'address'}],'name':'includeInReward','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':'address','name':'spender','type':'address'},{'internalType':'uint256','name':'addedValue','type':'uint256'}],'name':'increaseAllowance','outputs':[{'internalType':'bool','name':'','type':'bool'}],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':'address','name':'account','type':'address'}],'name':'isExcludedFromFee','outputs':[{'internalType':'bool','name':'','type':'bool'}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':'address','name':'account','type':'address'}],'name':'isExcludedFromReward','outputs':[{'internalType':'bool','name':'','type':'bool'}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':'uint256','name':'time','type':'uint256'}],'name':'lock','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[],'name':'name','outputs':[{'internalType':'string','name':'','type':'string'}],'stateMutability':'view','type':'function'},{'inputs':[],'name':'owner','outputs':[{'internalType':'address','name':'','type':'address'}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':'uint256','name':'tAmount','type':'uint256'},{'internalType':'bool','name':'deductTransferFee','type':'bool'}],'name':'reflectionFromToken','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[],'name':'renounceOwnership','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':'uint256','name':'burnFee','type':'uint256'}],'name':'setBurnFeePercent','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':'uint256','name':'maxTxPercent','type':'uint256'}],'name':'setMaxTxPercent','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':'uint256','name':'rewardFee','type':'uint256'}],'name':'setRewardFeePercent','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[],'name':'symbol','outputs':[{'internalType':'string','name':'','type':'string'}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':'uint256','name':'rAmount','type':'uint256'}],'name':'tokenFromReflection','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[],'name':'totalBurned','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[],'name':'totalHODLrRewards','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[],'name':'totalSupply','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':'address','name':'recipient','type':'address'},{'internalType':'uint256','name':'amount','type':'uint256'}],'name':'transfer','outputs':[{'internalType':'bool','name':'','type':'bool'}],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':'address','name':'sender','type':'address'},{'internalType':'address','name':'recipient','type':'address'},{'internalType':'uint256','name':'amount','type':'uint256'}],'name':'transferFrom','outputs':[{'internalType':'bool','name':'','type':'bool'}],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':'address','name':'newOwner','type':'address'}],'name':'transferOwnership','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[],'name':'uniswapV2Pair','outputs':[{'internalType':'address','name':'','type':'address'}],'stateMutability':'view','type':'function'},{'inputs':[],'name':'uniswapV2Router','outputs':[{'internalType':'contract IUniswapV2Router02','name':'','type':'address'}],'stateMutability':'view','type':'function'},{'inputs':[],'name':'unlock','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[],'name':'withdraw','outputs':[],'stateMutability':'nonpayable','type':'function'},{'stateMutability':'payable','type':'receive'}]
stats.notSafeMoon.pair.abi=[{'inputs':[],'payable':false,'stateMutability':'nonpayable','type':'constructor'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'address','name':'owner','type':'address'},{'indexed':true,'internalType':'address','name':'spender','type':'address'},{'indexed':false,'internalType':'uint256','name':'value','type':'uint256'}],'name':'Approval','type':'event'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'address','name':'sender','type':'address'},{'indexed':false,'internalType':'uint256','name':'amount0','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'amount1','type':'uint256'},{'indexed':true,'internalType':'address','name':'to','type':'address'}],'name':'Burn','type':'event'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'address','name':'sender','type':'address'},{'indexed':false,'internalType':'uint256','name':'amount0','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'amount1','type':'uint256'}],'name':'Mint','type':'event'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'address','name':'sender','type':'address'},{'indexed':false,'internalType':'uint256','name':'amount0In','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'amount1In','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'amount0Out','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'amount1Out','type':'uint256'},{'indexed':true,'internalType':'address','name':'to','type':'address'}],'name':'Swap','type':'event'},{'anonymous':false,'inputs':[{'indexed':false,'internalType':'uint112','name':'reserve0','type':'uint112'},{'indexed':false,'internalType':'uint112','name':'reserve1','type':'uint112'}],'name':'Sync','type':'event'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'address','name':'from','type':'address'},{'indexed':true,'internalType':'address','name':'to','type':'address'},{'indexed':false,'internalType':'uint256','name':'value','type':'uint256'}],'name':'Transfer','type':'event'},{'constant':true,'inputs':[],'name':'DOMAIN_SEPARATOR','outputs':[{'internalType':'bytes32','name':'','type':'bytes32'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[],'name':'MINIMUM_LIQUIDITY','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[],'name':'PERMIT_TYPEHASH','outputs':[{'internalType':'bytes32','name':'','type':'bytes32'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[{'internalType':'address','name':'','type':'address'},{'internalType':'address','name':'','type':'address'}],'name':'allowance','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[{'internalType':'address','name':'spender','type':'address'},{'internalType':'uint256','name':'value','type':'uint256'}],'name':'approve','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':true,'inputs':[{'internalType':'address','name':'','type':'address'}],'name':'balanceOf','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[{'internalType':'address','name':'to','type':'address'}],'name':'burn','outputs':[{'internalType':'uint256','name':'amount0','type':'uint256'},{'internalType':'uint256','name':'amount1','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':true,'inputs':[],'name':'decimals','outputs':[{'internalType':'uint8','name':'','type':'uint8'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[],'name':'factory','outputs':[{'internalType':'address','name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[],'name':'getReserves','outputs':[{'internalType':'uint112','name':'_reserve0','type':'uint112'},{'internalType':'uint112','name':'_reserve1','type':'uint112'},{'internalType':'uint32','name':'_blockTimestampLast','type':'uint32'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[{'internalType':'address','name':'_token0','type':'address'},{'internalType':'address','name':'_token1','type':'address'}],'name':'initialize','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':true,'inputs':[],'name':'kLast','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[{'internalType':'address','name':'to','type':'address'}],'name':'mint','outputs':[{'internalType':'uint256','name':'liquidity','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':true,'inputs':[],'name':'name','outputs':[{'internalType':'string','name':'','type':'string'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[{'internalType':'address','name':'','type':'address'}],'name':'nonces','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[{'internalType':'address','name':'owner','type':'address'},{'internalType':'address','name':'spender','type':'address'},{'internalType':'uint256','name':'value','type':'uint256'},{'internalType':'uint256','name':'deadline','type':'uint256'},{'internalType':'uint8','name':'v','type':'uint8'},{'internalType':'bytes32','name':'r','type':'bytes32'},{'internalType':'bytes32','name':'s','type':'bytes32'}],'name':'permit','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':true,'inputs':[],'name':'price0CumulativeLast','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[],'name':'price1CumulativeLast','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[{'internalType':'address','name':'to','type':'address'}],'name':'skim','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':false,'inputs':[{'internalType':'uint256','name':'amount0Out','type':'uint256'},{'internalType':'uint256','name':'amount1Out','type':'uint256'},{'internalType':'address','name':'to','type':'address'},{'internalType':'bytes','name':'data','type':'bytes'}],'name':'swap','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':true,'inputs':[],'name':'symbol','outputs':[{'internalType':'string','name':'','type':'string'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[],'name':'sync','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':true,'inputs':[],'name':'token0','outputs':[{'internalType':'address','name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[],'name':'token1','outputs':[{'internalType':'address','name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[],'name':'totalSupply','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[{'internalType':'address','name':'to','type':'address'},{'internalType':'uint256','name':'value','type':'uint256'}],'name':'transfer','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':false,'inputs':[{'internalType':'address','name':'from','type':'address'},{'internalType':'address','name':'to','type':'address'},{'internalType':'uint256','name':'value','type':'uint256'}],'name':'transferFrom','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'nonpayable','type':'function'}]
stats.usdt.pair.instance=new eth2.Contract(stats.usdt.pair.abi,stats.usdt.pair.address)
stats.notSafeMoon.instance=new eth2.Contract(stats.notSafeMoon.abi,stats.notSafeMoon.address)
stats.notSafeMoon.pair.instance=new eth2.Contract(stats.notSafeMoon.pair.abi,stats.notSafeMoon.pair.address)
var totalSupply=1000000000000000
stats.bnb.decimals=18
stats.usdt.decimals=18
stats.usdt.pair.decimals=18
stats.notSafeMoon.decimals=9
stats.notSafeMoon.pair.decimals=18
var startDateTime=new Date(2021,4,6,0,0,0,0)
var startStamp=startDateTime.getTime()
var newDate=new Date()
var newStamp=newDate.getTime()
var timer
var d,h,m,s
function updateClock(){newDate=new Date()
newStamp=newDate.getTime()
var diff=Math.round((newStamp-startStamp)/1000)
d=Math.floor(diff/(24*60*60))
diff=diff-d*24*60*60
h=Math.floor(diff/(60*60))
diff=diff-h*60*60
m=Math.floor(diff/60)
diff=diff-m*60
s=diff
h=h.toString()
m=m.toString()
s=s.toString()
if(h.length==1){h='0'+h}
if(m.length==1){m='0'+m}
if(s.length==1){s='0'+s}}
timer=setInterval(updateClock,1000)
setTimeout(()=>{updateDisplay()},500)
setTimeout(()=>{startTheLoop()},500)
function requestPermissions(){ethereum.request({method:'wallet_requestPermissions',params:[{eth_accounts:{}}]}).then((permissions)=>{const accountsPermission=permissions.find((permission)=>permission.parentCapability==='eth_accounts')
if(accountsPermission){console.log('eth_accounts permission successfully requested!')}}).catch((error)=>{if(error.code===4001){console.log('Permissions needed to continue.')}else{console.error(error)}})}
var tokenAddress='0x337e35Ed5B38D5C7Ec9F8d7cF78fe7F43d7DEC6F'
var tokenSymbol='NOTSAF'
var tokenDecimals=9
var tokenImage='https://notsafemoon.com/public/img/logos/NSMlogoCMC.png'
function addTokenToMetaMask(){try{ethereum.request({method:'wallet_watchAsset',params:{type:'ERC20',options:{address:tokenAddress,symbol:tokenSymbol,decimals:tokenDecimals,image:tokenImage}}})}catch(error){console.log(error)}}
var startTheLoop=async()=>{setInterval(()=>{updateDisplay()
if(user.wallet!==undefined){getUserBalance()}},5000)}
var getUserBalance=async()=>{user.balance=await stats.notSafeMoon.instance.methods.balanceOf(user.wallet).call()
user.balance=await applyDecimals(user.balance,9)
var userBal
if(user.balance<1000000000){userBal=(user.balance/1000000).toFixed(2)
document.getElementById('user-balance').innerHTML=userBal+' M'}else if(user.balance<1000000000000){userBal=(user.balance/1000000000).toFixed(2)
document.getElementById('user-balance').innerHTML=userBal+' B'}else if(user.balance<1000000000000000){userBal=(user.balance/1000000000000).toFixed(2)
document.getElementById('user-balance').innerHTML=userBal+' T'}
document.getElementById('user-balance-usd').innerHTML='$ '+numberWithCommas((user.balance*stats.notSafeMoon.price).toFixed(2))}
var updateDisplay=async()=>{stats.usdt.pair.reserves=await stats.usdt.pair.instance.methods.getReserves().call()
stats.usdt.pair.reserve0=await applyDecimals(stats.usdt.pair.reserves._reserve0,18)
stats.usdt.pair.reserve1=await applyDecimals(stats.usdt.pair.reserves._reserve1,18)
bnbPrice=stats.usdt.pair.reserve0/stats.usdt.pair.reserve1
stats.notSafeMoon.pair.reserves=await stats.notSafeMoon.pair.instance.methods.getReserves().call()
stats.notSafeMoon.pair.reservesNotSafeMoon=await applyDecimals(stats.notSafeMoon.pair.reserves._reserve0,9)
stats.notSafeMoon.pair.reservesBNB=await applyDecimals(stats.notSafeMoon.pair.reserves._reserve1,18)
stats.notSafeMoon.price=((await stats.notSafeMoon.pair.reservesBNB)/(await stats.notSafeMoon.pair.reservesNotSafeMoon))*(await bnbPrice)
statsData.price=(((await applyDecimals(stats.notSafeMoon.pair.reserves._reserve1,18))/(await applyDecimals(stats.notSafeMoon.pair.reserves._reserve0,9)))*bnbPrice).toFixed(12)
statsData.liquidity_reserves_moon=((await applyDecimals(stats.notSafeMoon.pair.reserves._reserve0,9)).toFixed(0)/1000000000000).toFixed(2)
statsData.liquidity_reserves_bnb=await(await applyDecimals(stats.notSafeMoon.pair.reserves._reserve1,18)).toFixed(0)
statsData.market_cap=(stats.notSafeMoon.price.toFixed(12)*(totalSupply-(await applyDecimals(await stats.notSafeMoon.instance.methods.totalBurned().call(),9))).toFixed(0)).toFixed(0)
statsData.total_burned=((await applyDecimals(await stats.notSafeMoon.instance.methods.totalBurned().call(),9))/1000000000000).toFixed(2)
statsData.circulating_supply=((totalSupply-(await applyDecimals(await stats.notSafeMoon.instance.methods.totalBurned().call(),9)).toFixed(0))/1000000000000).toFixed(2)
statsData.hodlr_rewards=((await applyDecimals(await stats.notSafeMoon.instance.methods.totalHODLrRewards().call(),9)).toFixed(0)/1000000000000).toFixed(2)
statsData.hodlr_rewards_usd=((await applyDecimals(await stats.notSafeMoon.instance.methods.totalHODLrRewards().call(),9)).toFixed(0)*(((await applyDecimals(stats.notSafeMoon.pair.reserves._reserve1,18))/(await applyDecimals(stats.notSafeMoon.pair.reserves._reserve0,9)))*bnbPrice).toFixed(12)).toFixed(0)
localStorage.setItem('statsData',JSON.stringify(statsData))
animateNumberFloatByMag(statsData.price,'#nsm-price')
animateNumberFloat(statsData.liquidity_reserves_moon,'#notSafeMoonLiquidity')
animateNumber(statsData.liquidity_reserves_bnb,'#bnbLiquidity')
animateNumber(statsData.market_cap,'#market-cap')
animateNumberFloat(statsData.total_burned,'#total-burned')
animateNumberFloat(statsData.circulating_supply,'#circulating-supply')
animateNumberFloat(statsData.hodlr_rewards,'#hodlr-rewards')
animateNumber(statsData.hodlr_rewards_usd,'#hodlr-rewards-usd')}
window.odometerOptions={auto:false,selector:'.odometer',format:'(,ddd)',duration:1000,animation:'count'}
setTimeout(()=>{checkBroswer()},250)
setTimeout(()=>{checkWeb3Connetion()},500)
function openModal(){$('#WalletModal').modal('show')}
function closeModal(){$('#WalletModal').modal('hide')}
var browser
function checkBroswer(){if(window.navigator.brave!=undefined){browser='brave'}}
const checkWeb3Connetion=async()=>{if(typeof window.ethereum!=='undefined'){ethereum.on('accountsChanged',()=>{})
ethereum.on('chainChanged',()=>{})
if(ethereum.isMetaMask==true){if(ethereum.isConnected()){$('#Web3Status-Container').hide()}}else{}}}
var infuraID='316460afa244407cbf86056bf0c3fda0'
var _chainName
var _coinbase
var _blockNumber
var _nodeInfo
var _balance
var _balanceWETH
var _balanceSAFEMOON
var _balanceBNB
var _transactionCount
var net='none'
var web3Status=$('#web3Status')
var address
var hasInput=false
var api=''
var isAccount=false
var nonBrowserWallet=false
var typeOfLogin
var walletObj
var WalletConnectProvider=window.WalletConnectProvider.default
var walletConnectObj=new WalletConnectProvider({infuraId:infuraID})
async function resetWeb3(){if(nonBrowserWallet==true){switch(typeOfLogin){case 'walletConnect':await walletConnectObj.close()
await walletConnectObj.disconnect()
break}}else{window.location.reload(true)}}
async function connectWeb3(type){if(net!==undefined){if(type==='web3'){if(typeof ethereum!=='undefined'){eth=new Web3Eth(ethereum)}else if(typeof web3!=='undefined'){eth=new Web3Eth(web3.givenProvider)}
typeOfLogin=type}else{switch(type){case 'walletConnect':closeModal()
try{await walletConnectObj.enable()
eth=new Web3Eth(walletConnectObj)
nonBrowserWallet=true
typeOfLogin=type
break}catch(err){console.log('Error from WalletConnect: '+err)
alert('Failed to establish a connection to WalletConnect.')
var isInIFrame=window.location!=window.parent.location
return}}}}
if(typeof eth!=='undefined'){var network=0
network=await eth.net.getId()
netID=network.toString()
switch(netID){case '1':net='mainnet'
break
case '3':net='ropsten'
break
case '4':net='rinkeby'
break
case '5':net='goerli'
break
case '42':net='kovan'
break
case '56':net='binance'
break
default:break}
if(nonBrowserWallet==true){getWeb3Accounts()
console.log(address)}else if(typeof ethereum!=='undefined'){ethereum.enable().then(function(){getWeb3Accounts()})}else{getWeb3Accounts()}
closeModal()
await getWeb3Data()}else{alert('Unable to locate a compatible web3 browser!')}}
function getWeb3Accounts(){eth.getAccounts(function(err,accounts){if(err)alert(err+'. Are you sure you are on a secure (SSL / HTTPS) connection?')
if(accounts.length>0){address=accounts[0]
var isAddress=Web3Utils.isAddress(address)
if(isAddress){$('#connectWeb3').hide()
eth.defaultAccount=accounts[0]
var connectorID=document.getElementById('connectStatus')
var strAddressHyperlink
if(net=='mainnet'){strAddressHyperlink='https://etherscan.io/address/'+address}else if(net=='binance'){strAddressHyperlink='https://bscscan.com/address/'+address}else{strAddressHyperlink='https://'+net+'.etherscan.io/address/'+address}
connectorID.innerHTML=connectorID.innerHTML.replace('Connect to Web3','Connected - '+typeOfLogin.charAt(0).toUpperCase()+typeOfLogin.slice(1)+' [<u>'+address+'</u>]')
connectorID.setAttribute('onclick','window.open("'+strAddressHyperlink+'","_blank"); return false;')
connectorID.outerHTML=connectorID.outerHTML.replace('btn-secondary','btn-primary')
document.getElementById('connector').childNodes[0].setAttribute('fill','green')
connectorID.removeAttribute('href')
isAccount=true}}else{alert('Please connect to your Web3 provider!')}})}
function getChainName(){switch(_chainId){case 1:return 'MainNet'
case 3:return 'Ropsten'
case 4:return 'Rinkeby'
case 5:return 'Goerli'
case 42:return 'Kovan'
case 1337:return 'Local'
case 56:return 'Binance Smart Chain'
default:return 'Unknown'}}