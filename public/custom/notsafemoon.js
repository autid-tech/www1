var launch_date=new Date(2021,6,18,0,0,0,0);var number_anim_duration=1000;var token_data_timout=10000;function copyAddressToClipboard(){var $temp=$("<input>");$("body").append($temp);$temp.val($("#nsm-token-address").text()).select();document.execCommand("copy");$temp.remove();}
function numberWithCommas(x){return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,",");}
function floatFixedDecimalsByMag(x){var m=-Math.floor(Math.log10(x)+1);return x.toFixed(m+5);}
function animateNumberFloatByMag(num,elem)
{$(elem).each(function(){$(this).prop('Counter',$(this).text()).animate({Counter:num},{duration:number_anim_duration,easing:'swing',step:function(now){$(this).text(floatFixedDecimalsByMag(now));}});});}
function animateNumberFloat(num,elem)
{$(elem).each(function(){$(this).prop('Counter',$(this).text()).animate({Counter:num},{duration:number_anim_duration,easing:'swing',step:function(now){$(this).text(now.toFixed(1));}});});}
function animateNumber(num,elem)
{$(elem).each(function(){$(this).prop('Counter',$(this).text().replace(/,/g,'')).animate({Counter:num},{duration:number_anim_duration,easing:'swing',step:function(now){$(this).text(numberWithCommas(Math.ceil(now)));}});});}
function updateTokenData(result){animateNumberFloat(result.price,"#nsm-price")
animateNumber(result.liquidity_reserves,"#nsm-liqreserves");animateNumber(result.market_cap,"#nsm-marketcap");animateNumber(result.total_burned,"#nsm-totalburned");animateNumber(result.circulating_supply,"#nsm-circsupply");animateNumber(result.hodle_rwards,"#nsm-hodlrewards");}
function updateTime(){var now=new Date().getTime();var distance=now-launch_date;var days=Math.floor(distance/(1000*60*60*24));var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));var minutes=Math.floor((distance%(1000*60*60))/(1000*60));var seconds=Math.floor((distance%(1000*60))/1000);$('#nsm-timesincelaunch').text(days+"d "+hours+"h "
+minutes+"m "+seconds+"s ");}
$(document).ready(function(){updateTime();var x=setInterval(updateTime,1000);$("#nsm-logo-reveal").get(0).onended=function(){$("#nsm-logo-reveal").removeClass("visible").removeClass("d-block").addClass("invisible").addClass("d-none");$("#nsm-logo-loop").addClass("visible").addClass("d-block").removeClass("invisible").removeClass("d-none");$("#nsm-logo-loop").get(0).play();}});
