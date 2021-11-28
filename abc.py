from typing import Literal

tag='완력민첩지식언변매력은신조작현금'
asd='''577 181
638 426
604 26
612 82
586 57
660 251
636 140
572 309'''
li = asd.split('\n')
print(li)
li2  = []
n=0
for item in li:
    print(item)
    li2.append(item.split(' ')+[tag[n*2:n*2+2]])
    n+=1
print(li2)
