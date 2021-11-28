box = document.getElementById('display')
box.innerHTML = '--------'
keys = {};
document.addEventListener('keydown', e => {keys[e.key] = true})  //키 체크중 
document.addEventListener('keyup', e => {if(keys[e.key]) delete keys[e.key]})  
input = document.getElementById('text')
hishit = ['(대충이모티콘)','ㄷㄷ','ㄷㄷ','우흥','아따']
function writeNewRow(value) {
    box.innerHTML += '<br/>' + value
}
btn = document.getElementById('btn');

function write(){
    if (input.value){
        writeNewRow('사용자: '+input.value);
        writeNewRow('윤서진: '+hishit[Math.floor(Math.random()*5)]+' . . . . . . . .');
        input.value = '';}
        box.scrollTop = box.scrollHeight;
}
btn.addEventListener('click',function () {
    write();
})
function loop(){
    if (keys.Enter){
        write();
    }
    requestAnimationFrame(loop)
}
tagdata=[['577', '181', '완력'], ['638', '426', '민첩'], ['604', '26', '지식'], ['612', '82', '언변'], ['586', '57', '매력'], ['660', '251', '은신'], ['636', '140', '조작'], ['572', '309', '현금']]
for (i=0;i<8;i++){
    obj = document.createElement("div")
    obj.innerHTML=tagdata[i][2]
    obj.style.border='black solid 1px'
    obj.style.width='40px'
    obj.style.background='white'
    obj.style.position='absolute'
    obj.style.top=tagdata[i][1]+'px'
    obj.style.left=tagdata[i][0]+'px'
    document.body.appendChild(obj);
}
requestAnimationFrame(loop)

